# Stage 1: Dependencies
FROM node:20-slim AS deps
WORKDIR /app

# Install package manager
RUN npm install -g pnpm@latest

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Stage 2: Builder
FROM node:20 AS builder
WORKDIR /app

# Install pnpm and increase Node.js memory limit
RUN npm install -g pnpm@latest && \
    apt-get update && \
    apt-get install -y python3 make g++
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

ARG RESEND_API_KEY
ARG CONTACT_EMAIL
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV CONTACT_EMAIL=$CONTACT_EMAIL

# Build the application
RUN pnpm build

# Stage 3: Runner
FROM node:20-slim AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000

ARG RESEND_API_KEY
ARG CONTACT_EMAIL
ENV RESEND_API_KEY=$RESEND_API_KEY
ENV CONTACT_EMAIL=$CONTACT_EMAIL

# Create a non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copy standalone build
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Switch to non-root user
USER nextjs

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]

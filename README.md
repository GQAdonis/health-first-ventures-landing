# Health First Ventures Landing Page

A modern, responsive landing page built with Next.js 14, TypeScript, and Tailwind CSS. This project uses the latest App Router architecture and follows best practices for performance and SEO.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI
- **State Management:** Zustand
- **Form Handling:** React Hook Form + Zod
- **Email Service:** Resend
- **Animation:** Framer Motion
- **Package Manager:** pnpm

## Prerequisites

- Node.js 20 or later
- pnpm (latest version)

## Getting Started

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd health-first-ventures-landing
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then, update the following variables in `.env.local`:
   - `RESEND_API_KEY`: Your Resend API key for email functionality
   - `CONTACT_EMAIL`: Email address for receiving contact form submissions

4. Start the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build production bundle
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm typecheck` - Run TypeScript type checking

## Docker Deployment

The project includes a multi-stage Dockerfile for optimal production deployment.

1. Build the Docker image:
   ```bash
   docker build \
     --build-arg RESEND_API_KEY=your_resend_api_key \
     --build-arg CONTACT_EMAIL=your_contact_email \
     -t health-first-ventures-landing .
   ```

2. Run the container:
   ```bash
   docker run -p 3000:3000 health-first-ventures-landing
   ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
health-first-ventures-landing/
├── app/                # Next.js App Router pages and layouts
├── components/         # React components
├── lib/               # Utility functions and shared logic
├── public/            # Static assets
├── styles/            # Global styles and Tailwind config
└── types/             # TypeScript type definitions
```

## Development Guidelines

- Follow TypeScript strict mode guidelines
- Use ES modules (import/export)
- Components should be client-side by default (use 'use client' directive)
- Follow the feature-based CLEAN architecture
- Use shadcn-ui components where possible
- Implement proper error handling and loading states
- Ensure responsive design across all viewports

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | API key for Resend email service | Yes |
| `CONTACT_EMAIL` | Email to receive contact form submissions | Yes |

## Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary and confidential.

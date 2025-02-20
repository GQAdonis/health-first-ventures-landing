#!/bin/bash

# Ensure environment variables are set
if [ -z "$RESEND_API_KEY" ] || [ -z "$CONTACT_EMAIL" ]; then
    echo "Error: RESEND_API_KEY and CONTACT_EMAIL must be set in the environment"
    exit 1
fi

# Build for amd64
echo "Building for amd64..."
docker buildx build \
    --build-arg RESEND_API_KEY="${RESEND_API_KEY}" \
    --build-arg CONTACT_EMAIL="${CONTACT_EMAIL}" \
    --platform linux/amd64 \
    -t tribehealth/health-first-ventures-landing:latest-amd64 \
    --push .

# Build for arm64
echo "Building for arm64..."
docker buildx build \
    --build-arg RESEND_API_KEY="${RESEND_API_KEY}" \
    --build-arg CONTACT_EMAIL="${CONTACT_EMAIL}" \
    --platform linux/arm64 \
    -t tribehealth/health-first-ventures-landing:latest-arm64 \
    --push .

# Create and push multi-arch manifest
echo "Creating multi-arch manifest..."
docker manifest create tribehealth/health-first-ventures-landing:latest \
    tribehealth/health-first-ventures-landing:latest-amd64 \
    tribehealth/health-first-ventures-landing:latest-arm64

docker manifest push tribehealth/health-first-ventures-landing:latest

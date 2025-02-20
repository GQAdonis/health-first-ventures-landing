#!/bin/bash

# Ensure environment variables are set
if [ -z "$RESEND_API_KEY" ] || [ -z "$CONTACT_EMAIL" ]; then
    echo "Error: RESEND_API_KEY and CONTACT_EMAIL must be set in the environment"
    exit 1
fi

# Set the build timestamp
BUILD_TAG=$(date '+%Y%m%d-%H%M%S')

# Build for amd64
echo "Building for amd64..."
docker buildx build \
    --build-arg RESEND_API_KEY="${RESEND_API_KEY}" \
    --build-arg CONTACT_EMAIL="${CONTACT_EMAIL}" \
    --platform linux/amd64 \
    -t tribehealth/health-first-ventures-landing:amd64-${BUILD_TAG} \
    --push .

# Build for arm64
echo "Building for arm64..."
docker buildx build \
    --build-arg RESEND_API_KEY="${RESEND_API_KEY}" \
    --build-arg CONTACT_EMAIL="${CONTACT_EMAIL}" \
    --platform linux/arm64 \
    -t tribehealth/health-first-ventures-landing:arm64-${BUILD_TAG} \
    --push .

# Create and push multi-arch manifest
echo "Creating multi-arch manifest..."
docker manifest create tribehealth/health-first-ventures-landing:${BUILD_TAG} \
    tribehealth/health-first-ventures-landing:amd64-${BUILD_TAG} \
    tribehealth/health-first-ventures-landing:arm64-${BUILD_TAG}

docker manifest push tribehealth/health-first-ventures-landing:${BUILD_TAG}

# Also tag as latest for backward compatibility
docker manifest create tribehealth/health-first-ventures-landing:latest \
    tribehealth/health-first-ventures-landing:amd64-${BUILD_TAG} \
    tribehealth/health-first-ventures-landing:arm64-${BUILD_TAG}

docker manifest push tribehealth/health-first-ventures-landing:latest

import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'standalone',
  transpilePackages: ['framer-motion'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        dns: false,
        net: false,
        tls: false,
        assert: false,
        'worker_threads': false,
        readline: false,
        module: false,
        os: false,
        path: false,
      };
      config.resolve.alias = {
        ...config.resolve.alias,
        'node:fs': false,
        'node:assert': false,
        'node:module': false,
        'node:os': false,
        'node:path': false,
      };
    }
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos'
      }
    ]
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes
        source: '/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*', // Allow all origins
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET, POST, PUT, DELETE, PATCH, OPTIONS, HEAD, CONNECT, TRACE',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value: '*', // Allow all headers
          },
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          },
          {
            key: 'Access-Control-Max-Age',
            value: '86400', // Cache preflight requests for 24 hours
          },
        ],
      },
    ];
  },
  // Enable all HTTP methods in the API
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: '/api/:path*',
      },
    ];
  },
};

export default withPayload(config);

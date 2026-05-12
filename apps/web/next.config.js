/** @type {import('next').NextConfig} */
const isWindows = process.platform === 'win32';
const nextConfig = {
  output: isWindows ? undefined : 'standalone',
  reactStrictMode: true,
  trailingSlash: false,
  experimental: {
    serverComponentsExternalPackages: []
  },
  images: {
    unoptimized: true
  },
  // Force all pages to be dynamic (no static generation)
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
  // Disable static optimization for all pages
  staticPageGenerationTimeout: 0
};

module.exports = nextConfig;

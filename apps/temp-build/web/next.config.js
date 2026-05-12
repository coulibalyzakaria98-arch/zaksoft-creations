/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Disable static generation completely for pages using useAuth()
  // by not defining getStaticProps/getStaticPaths, and let them be dynamic at runtime.
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;

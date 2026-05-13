/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone', // Commented out to ensure default .next output for Vercel
  reactStrictMode: true,
  // output: 'standalone', // Commented out to ensure default .next output for Vercel
  
  // Skip static generation for pages that require AuthProvider during build
  // or handle client-side rendering explicitly.
};

module.exports = nextConfig;

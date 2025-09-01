/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static HTML export
  distDir: 'out',   // folder where exported static files will go
};

module.exports = nextConfig;

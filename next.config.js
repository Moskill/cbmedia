/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'http://prepper-survival.org/',
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  }
}


module.exports = nextConfig

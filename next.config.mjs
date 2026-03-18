/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  webpack: (config, { dev }) => {
    // Windows can lock webpack cache pack files intermittently (EBUSY).
    // Use in-memory caching during dev to avoid noisy cache write failures.
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'download-apk.220cordncode.com'
            }
        ]
    }
    // env: {
    //   NEXT_PUBLIC_BUCKET_URL: process.env.NEXT_PUBLIC_BUCKET_URL
    // },
    // typescript: {
    //   // !! WARN !!
    //   // Dangerously allow production builds to successfully complete even if
    //   // your project has type errors.
    //   // !! WARN !!
    //   ignoreBuildErrors: true
    // }
};

module.exports = nextConfig;

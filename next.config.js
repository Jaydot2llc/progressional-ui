/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    experimental: {
        appDir: true,
        },
        webpack: (config, { webpack }) => {
        config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
        }
        config.externals.push({
        sharp: "commonjs sharp",
        canvas: "commonjs canvas",
        })
        config.plugins.push(
        new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
        })
        )
        return config
        },
    images: {
        domains: ['mbts-assets-0.s3.us-east-2.amazonaws.com'],
      },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'http://localhost:3000/api/:path*',
            },
        ]
      },
}

module.exports = nextConfig


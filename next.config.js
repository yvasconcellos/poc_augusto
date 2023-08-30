/** @type {import('next').NextConfig} */

// eslint-disable-next-line no-undef
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['picsum.photos']
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            outputPath: 'static/media',
            name: '[name].[ext]',
            esModule: false
          }
        }
      ]
    })

    return config
  }
}

// const withLess = require('@zeit/next-less')
const isProd = process.env.NODE_ENV === 'production'
const withNextAntdLess = require('./next-antd-less.config')

module.exports = withNextAntdLess({
  assetPrefix: isProd ? 'https://clare320.github.io/kede-next-example' : '',
  pageExtensions: ['js', 'jsx'],
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      ...defaultPathMap,
      '/apply': { page: '/about', query: {} }
    }
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]__[hash:base64:5]'
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  webpack: (config, options) => {
    return config
  }
})

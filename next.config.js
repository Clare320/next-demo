const withLess = require('@zeit/next-less')
const path = require('path')

module.exports = withLess({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: "[local]__[hash:base64:5]",
    getLocalIdent: (context, localIdentName, localName, options) => {
      let hz = context.resourcePath.replace(context.rootContext, "")
      if (/node_modules/.test(hz)) {
        return localName
      } else {
        return localIdentName
      }
    }
  },
  lessLoaderOptions: {
    javascriptEnabled: true,
    // modifyVars:
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      const antStyles = /antd\/.*?\/style.*?/
      const origExternals = [...config.externals]
      config.externals = [
        (context, request, callback) => {
          if (request.match(antStyles)) return callback()
          if (typeof origExternals[0] === 'function') {
            origExternals[0](context, request, callback)
          } else {
            callback()
          }
        },
        ...(typeof origExternals[0] === 'function' ? [] : origExternals),
      ]

      config.module.rules.unshift({
        test: antStyles,
        use: 'null-loader',
      })
    }

    return config
  }
})

/**
 *  const ruleRegStr = rule.test.toString()
    if (ruleRegStr.includes('.less')) {
      if (ruleRegStr === '/\\.less$/') {
        rule.exclude = [
          /\.module\.less$/,
          path.resolve(__dirname, 'src/')
        ]
      } else if (ruleRegStr === '/\\.module\\.less$/') {
        rule.test = /\.less$/
        rule.include = [
          /\.module\.less$/,
          path.resolve(__dirname, 'src/')
        ]
      }
    }
 */
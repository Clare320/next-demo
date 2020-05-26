const express = require('express')
const next = require('next')
const cacheableResponse = require('cacheable-response')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60,
  get: async ({ req, res, pagePath, queryParams }) => {
    const data = await app.renderToHTML(req, res, pagePath, queryParams)

    if (res.statusCode !== 200) {
      res.end(data)
      return
    }
    return { data }
  },
  send: ({ data, res }) => res.send(data)
})

app.prepare().then(() => {
  const server = express()

  // 这一步可以通过配置需缓存的路由数组循环生成
  server.get('/', (req, res) => ssrCache({ req, res, pagePath: '/' }))

  server.get('/result/stars', (req, res) => ssrCache({ req, res, pagePath: '/result/stars' }))

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})

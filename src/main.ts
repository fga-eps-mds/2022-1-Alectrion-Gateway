import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import httpProxy from 'express-http-proxy'
import { getHost, getUrComplement } from './redirect'

dotenv.config()
const app = express()

app.use(cors())

app.use(
  '/*',
  httpProxy(getHost, {
    proxyReqPathResolver: function (req) {
      return getUrComplement(req)
    }
  })
)

const port = Number(process.env.PORT) || 4000

app.listen(port, '0.0.0.0', () => {
  console.log(`rodando porta ${port}`)
})

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import httpProxy from 'express-http-proxy'
import morgan from 'morgan'
import { selectProxyHost } from './redirect'
const app = express()

app.use(cors())
app.use(morgan('dev'))

dotenv.config()

app.use((req, res, next) => {
  httpProxy(selectProxyHost(req.path))(req, res, next)
  next()
})
const port = Number(process.env.PORT) || 4000

app.listen(port, '0.0.0.0', () => {
  console.log(`rodando porta ${port}`)
})

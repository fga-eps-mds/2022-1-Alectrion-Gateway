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
const port = process.env.PORT

app.use((req, res, next) => {
  httpProxy(selectProxyHost(req.path))(req, res, next)
  next()
})

app.listen(port, () => {
  console.log(`rodando porta ${port}`)
})

import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import httpProxy from 'express-http-proxy'
import morgan from 'morgan'

const app = express()

app.use(cors())
app.use(morgan('dev'))

dotenv.config()
const port = process.env.PORT

/*
app.get('/', function (req, res) {
  res.json({ message: 'Alectrion Home' }).status(200)
})
*/

function selectProxyHost(req, res) {
  if (req.path.startsWith('/users')) {
    return process.env.USER_URL
  } else if (req.path.startsWith('/equipaments')) {
    return process.env.EQUIP_URL
  } else {
    return process.env.BASE_URL
  }
}

app.use((req, res, next) => {
  httpProxy(selectProxyHost(req))(req, res, next)
  next()
})

app.listen(port, () => {
  console.log(`rodando porta ${port}`)
})

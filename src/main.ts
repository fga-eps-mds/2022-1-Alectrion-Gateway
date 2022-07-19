import express, { json } from 'express'
const port = 4000

const app = express()

app.use(json())

app.get('/', function (req, res) {
  res.json({ message: 'SGPTI' }).status(200)
})

app.listen(port, () => console.log(`rodando ${port}`))

import express, { json } from 'express'

const app = express()

app.use(json())

app.get('/users', function (req, res) {
  res.json({ message: 'porta users' }).status(200)
})
app.get('/equipament', function (req, res) {
  res.json({ message: 'porta equipament' }).status(200)
})
app.get('/', (req, res) => {
  res.json({ message: 'porta Principal' }).status(200)
})
app.listen(4001, () => {
  console.log(`porta 4001`)
})

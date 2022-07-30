import express, { json } from 'express'
import cors from 'cors'
import httpProxy from 'express-http-proxy'

const proxy = require('express-http-proxy')

const app = express()

const port = 4001

/*
app.use(json())

app.use(cors())
app.use('/users', proxy('http:localhost:4001'))
app.listen(port, () => console.log(`testando porta ${port}`))
*/

function selectProxyHost(req){
    if (req.path.startWith('/users')) return 'http://localhost:4001'
    else if (req.path.startWith('/equipament')) return 'http://localhost:4002'
    else return 'http://localhost:4003'
}

app.use(cors())
app.use((req,res,next)=> {
    function httpProxy(selectProxyHost(req)(req,res,next))
})

app.use((req,res,next)=>{
    next()
})

app.use('/users', proxy('http://localhost:4001'))
app.use('/equipament', proxy('http://localhost:4002'))
app.use('/', proxy('http://localhost:4003'))

app.listen(port, function () {
    console.log(`porta ${port}`)
})


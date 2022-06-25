const { application } = require('express')
const express = require('express')
const app = express()
const port = 5000 // variavel ambiente 
const path = require ('path')
const usersRouter = require('./users')
const basePath = path.join(__dirname, 'templates')// essa variavel esta pegando minha pasta templates


// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)//middleware

app.use(express.json())

app.use('/users', usersRouter)


// arquivos estaticos
app.use(express.static('public'))

app.get('/user', (req, res) => {
    res.sendFile(`${basePath}/user.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})//o '/' sera a rota princiapl, // essa e uma rota



app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})


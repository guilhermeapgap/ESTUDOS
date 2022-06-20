const { application } = require('express')
const express = require('express')
const app = express()
const port = 3000 // variavel ambiente 
const path = require ('path')
const usersRouter = require('./users')
// ler o body
app.use(
    express.urlencoded({
        extended: true,
    }),
)//middleware

app.use(express.json())

const basePath = path.join(__dirname, 'templates')// essa variavel esta pegando minha pasta templates

app.use('/users', usersRouter)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})//o '/' sera a rota princiapl, // essa e uma rota

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})




// req= requisição, quando recebe um dado quando o usuario enviou um formulario 

// res = resposta, o que a gente envia para o usuario 


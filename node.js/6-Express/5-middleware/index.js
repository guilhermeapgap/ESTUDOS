const express = require('express')
const app = express()
const port = 3000 // variavel ambiente 

const path = require ('path')
const basePath = path.join(__dirname, 'templates')// essa variavel esta pegando minha pasta templates

const checkAuth = function(req,res,next){
    req.authStatus = true
    if (req.authStatus){
        console.log('esta logado pode continuar')
        next()
    }else{
        console.log('não esta logado, falça o login para continuar')
        next()
    }
}//middleware

app.use(checkAuth)

app.get('/', (req, res) => {

    res.sendFile(`${basePath}/index.html`)

})//o '/' sera a rota princiapl, 

app.listen(port, () => {
    console.log(`app rodando na porta ${port}`)
})
// req= requisição, quando recebe um dado quando o usuario enviou um formulario 

// res = resposta, o que a gente envia para o usuario 
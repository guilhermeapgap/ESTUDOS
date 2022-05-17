const http = require('http')

const port = 3000 //porta do servidor
 
const server = http.createServer((req, res) => {

    const urlInfo = require('url').parse(req.url, true)
    const name = urlInfo.query.name

    res.statusCode = 200
    res.setHeader('contenty-type', 'text/html')//precisa dessa linha de codigo para aceitar HTML

    if(!name){
        res.end(
            '<h1>Preencha seu nome </h1><form method="get"><input type="text" name="name"><input type="submit" value="Enviar"></form>'
        )
    }else{
        res.end(`Seja bem vindo ${name}`)
    }
}) //criando um servidor

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

const http = require('http')

const port = 3000 //porta do servidor
 
const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('contenty-type', 'text/html')//precisa dessa linha de codigo para aceitar HTML
    res.end('<h1>Olá, este é meu primeiro server com HTML!!!</h1>')
}) //criando um servidor

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

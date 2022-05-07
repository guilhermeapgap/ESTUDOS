const http = require('http')

const port = 3000 //porta do servidor
 
const server = http.createServer((req, res) => {
    res.write('Resposta do site')//Mandando um resposta
    res.end()//fechando a resposta
    //req = requisition 
    //res = response
}) //criando um servidor

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

// para abrir no navegador basta ir no browser e escrever localhost:numero da porta tipo 3000
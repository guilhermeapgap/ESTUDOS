const http = require('http')
const fs = require('fs')

const port = 3000 //porta do servidor
 
const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write(data)//retornando a data o conteudo do HTMl
        return res.end()
    })
}) //criando um servidor

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

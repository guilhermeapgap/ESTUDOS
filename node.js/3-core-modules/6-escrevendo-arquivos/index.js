const http = require('http')
const fs = require('fs')


const port = 3000 //porta do servidor
 
const server = http.createServer((req, res) => {

    const urlInfo = require("url").parse(req.url, true)
    const name = urlInfo.query.name;

    if(!name){
        fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'content-Type': 'text/html'})
        res.write(data)//retornando a data o conteudo do HTMl
        return res.end()
    }) 
    }else{
        fs.writeFile("arquivo.txt", name, function(err, data){
            res.writeHead(302, {
                location: "/",
            })
            return res.end()
        })
    }
}) //criando um servidor

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

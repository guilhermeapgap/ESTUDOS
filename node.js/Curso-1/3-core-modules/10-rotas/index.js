const http = require('http')
const fs = require('fs')
const url = require('url')

const port = 3000 //porta do servidor
 
const server = http.createServer((req, res) => {

    const q = url.parse(req.url, true)
    const filename = q.pathname.substring(1)

    if(filename.includes('html')){
        if(fs.existsSync(filename)){
            fs.readFile(filename, function(err, data){
            res.writeHead(200, {'content-Type': 'text/html'})
            res.write(data)//retornando a data o conteudo do HTMl
            return res.end()
            }) 
        }else{
            //404
            fs.readFile('404.html', function(err, data){
            res.writeHead(404, {'content-Type': 'text/html'})
            res.write(data)//retornando a data o conteudo do HTMl
            return res.end()
                }) 
        }
    }
}) //criando um servidor

server.listen(port, () =>{
    console.log(`servidor rodando na porta ${port}`)
})

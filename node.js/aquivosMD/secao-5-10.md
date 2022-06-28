<h1>Node.js<img align="center" alt="Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></h1>

## [Guia rápido](#guia-rápido-1)


# Aula 80 

## Introdução ao Express 

* O express e um framework para backend muito usado no node.js
* Serve para criarmos aplicações web
* Nele podemos criar rotas, renderizar HTML, conectar a um banco de dados
* O epress torna a criação de apps muito mais simplificada, do com os core modules 

para instalar o express 
> npm install express


# Aula 82
## O que são rotas?

* Rota é um conceito super importante e presente em aplicações web

* Basicamente são as URL's que acessamos 

* Se criamos um rota podemos acessar através da URL

 


# Aula 115

## Intergração do MySQL e Node.js

* primeiramente vamos precisar instalar o driver, que é um pacote chamado mysql (instalamos com o npm normalmente)

* Vamos inserir informações como: host, user, password eo banco;


**Pacotes nessesarios para esse projeto**
>express express-handlebars nodemon mysql

`````js
const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const app = express()


app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')//template engine

app.use(express.static('public'))//ponte para os arquivos estaticos

app.get('/', (req,res)=>{
    res.render('home')
})


//---------------------------------//
// parte da conexão //

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'estudosnode',
    port: '3307'
})// dados do banco do dados 


conn.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log('conectou ao MySQL!')

    app.listen(3000)
}) //criando uma conexãos

````


















































































# Guia rápido 
[início](#nodejs)

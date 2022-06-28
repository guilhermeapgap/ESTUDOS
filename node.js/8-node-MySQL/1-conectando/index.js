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
    database:'estudosNode',
})// dados do banco do dados 


conn.connect(function(err){
    if(err){
        console.log(err)
    }

    console.log('conectou ao MySQL!')

    app.listen(3000)
}) //criando uma conexãos


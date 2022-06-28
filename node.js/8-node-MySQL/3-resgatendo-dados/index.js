const express = require('express')
const exphbs = require('express-handlebars')
const mysql = require('mysql')
const app = express()


app.use(
    express.urlencoded({
        extended:true,
}),
)

app.use(express.json())//pegando o body em json



app.engine('handlebars', exphbs.engine())
app.set('view engine','handlebars')//template engine

app.use(express.static('public'))//ponte para os arquivos estaticos


//home
app.get('/', (req,res)=>{
    res.render('home')
})


//---------------------------------//
// parte da conexão //



app.post('/books/insertbook', (req,res)=>{

    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `INSERT INTO books (title, pageqty) VALUES ('${title}','${pageqty}')`//codigo que ira para o banco de dados 

    conn.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }
        res.redirect('/')
    }) //executando o codigo sql

})



//resgatento os dados
app.get('/books', (req, res) => {
    const sql = "SELECT * FROM books"

    conn.query(sql, function (err, data){
        if(err){
            console.log(err)
            return
        }

        const books = data

        console.log(books)

        res.render('books', {books})
    })
})





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


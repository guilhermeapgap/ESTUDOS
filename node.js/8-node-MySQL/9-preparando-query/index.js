const express = require('express')
const exphbs = require('express-handlebars')

const pool = require('./db/conn')

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

    const sql = `INSERT INTO books (??, ??) VALUES (?,?)`//codigo que ira para o banco de dados 
    const data = ['title','pageqty', title, pageqty]//esse const esta substituindo as interrogações

    pool.query(sql, data, function(err){
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

    pool.query(sql, function (err, data){
        if(err){
            console.log(err)
            return
        }

        const books = data

        console.log(books)

        res.render('books', {books})
    })
})


//selecionando um arquivo especifico pelo ID
app.get('/books:id', (req, res)=>{
    const id = req.params.id//pegando o id

    const sql = `SELECT * FROM books WHERE id = ${id}`//mandando para o banco 

    pool.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]

        res.render('book', {book})
    })
})

// criando aba de edição 
app.get('/books/edit/:id', (req,res)=>{
    const id = req.params.id

    const sql = `SELECT * FROM books WHERE id = ${id}`

    pool.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }
        const book = data[0]

        res.render('editbook', {book})
    })

})


//  atualizando dados 

app.post('/books/updatabook', (req,res)=>{

    const id = req.body.id
    const title = req.body.title
    const pageqty = req.body.pageqty

    const sql = `UPDATE books SET title = '${title}', pageqty = '${pageqty}' WHERE id = ${id}`

    pool.query(sql, function(err, data){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })

})
// Removendo dados

app.post('/books/remove/:id',(req,res)=>{
    const id = req.params.id
    const sql = `DELETE FROM books WHERE id = ${id}`

    pool.query(sql, function(err){
        if(err){
            console.log(err)
            return
        }

        res.redirect('/books')
    })
})



app.listen(3000)

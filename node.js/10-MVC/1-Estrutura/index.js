const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')



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




const express = require('express')
const exphbs = require('express-handlebars')
const conn = require('./db/conn')

const User = require('./models/User')

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

app.get('/users/create', (req,res)=>{
    res.render('adduser')
})


app.post('/users/create', function (req, res) {
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
  
    if (newsletter === 'on') {
      newsletter = true
    }else {
        newsletter = false
    }

    User.create({ name, occupation, newsletter })
  
    res.redirect('/')
  })
  
//home
app.get('/', (req,res)=>{
    res.render('home')
})


conn.sync().then(()=>{
   app.listen(3000) 
}).catch((err)=> console.log(err))


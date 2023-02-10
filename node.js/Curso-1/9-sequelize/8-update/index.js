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

//lendo os dados do banco 
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
  
//resgatando os dados do banco 
app.get('/user/:id', async (req,res)=>{

    const id = req.params.id
    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('userview', {user})
})

//removendo dados 
app.post('/users/delete/:id', async (req,res) =>{
    const id = req.params.id

    await User.destroy({where: {id: id}})

    res.redirect('/')
})


//editando dados part 1

app.get('/users/edit/:id', async (req,res) =>{
    const id = req.params.id

    const user = await User.findOne({raw: true, where: {id: id}})

    res.render('usersedit', {user})
})

//editando dados part 2
app.post('/users/update', async (req,res) => {

    const id = req.body.id
    const name = req.body.name
    const occupation = req.body.occupation
    let newsletter = req.body.newsletter
  
    if (newsletter === 'on') {
      newsletter = true
    }else {
        newsletter = false
    }
    
    const userData ={
        id,
        name,
        occupation,
        newsletter
    }

    await User.update(userData, {where: {id: id}})

    res.redirect('/')
})

//home
app.get('/', async (req,res)=>{

    const users = await User.findAll({raw: true})

    res.render('home', {users: users})
})


conn.sync().then(()=>{
   app.listen(3000) 
}).catch((err)=> console.log(err))


const express = require ('express')
const exphbs = require ('express-handlebars')


const hbs = exphbs.create({
    partialsDir:['views/partials']
})
const app = express()

// app.engine('handlebars',exphbs()) 
// esse medodo acima foi descontinuado A96



app.use(express.static('public'))




app.engine('handlebars', hbs.engine, exphbs.engine())
app.set('view engine', 'handlebars')

app.get ('/dashboard', (req,res)=>{

    const items = ['item 1 ', 'item 2', 'item 3']

    res.render('dashboard', {items})
})

app.get ('/post', (req, res)=>{
    const post = {
        title: 'Aprender node',
        category:  'JS',

    }
    

    res.render('blogpost', {post})
})

app.get('/blog', (req,res)=>{
    
    const post = [
        {
            title: 'Aprender node',
            category:  'JS',
            Comments: 25

        },
        {
            title: 'Aprender java ',
            category:  'java',
            Comments: 10

        },
        {
            title: 'Aprender python',
            category:  'py',
            Comments: 150
        }
    ]

    res.render('blog', {post})
})
app.get('/', (req, res) => {

    const user = {
        name: "guilherme",
        surname: "Augusto",
        age: 20,
        local: "brasilia"
    }

    const auth = true
    const approved = false//

    res.render('home', {user: user, auth, approved})
})

app.listen(3000,()=>{
    console.log('App funcionando')
})
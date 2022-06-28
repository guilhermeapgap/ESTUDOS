const express = require ('express')
const exphbs = require ('express-handlebars')

const app = express()

// app.engine('handlebars',exphbs()) 
// esse medodo acima foi descontinuado A96

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get ('/dashboard', (req,res)=>{
    res.render('dashboard')
})

app.get('/', (req, res) => {

    const user = {
        name: "guilherme",
        surname: "Augusto",
        age: 20,
        local: "brasilia"
    }

    const auth = false
    const approved = false//

    res.render('home', {user: user, auth, approved})
})

app.listen(3000,()=>{
    console.log('App funcionando')
})
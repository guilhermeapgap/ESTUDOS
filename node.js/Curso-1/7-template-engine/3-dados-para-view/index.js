const express = require ('express')
const exphbs = require ('express-handlebars')

const app = express()

// app.engine('handlebars',exphbs()) 
// esse medodo acima foi descontinuado A96

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {

    const user = {
        name: "guilherme",
        surname: "Augusto",
        age: 20,
        local: "brasilia"
    }

    res.render('home', {user: user})
})

app.listen(3000,()=>{
    console.log('App funcionando')
})
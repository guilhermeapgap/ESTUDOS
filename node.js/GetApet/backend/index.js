const express = require('express')
const cors = require('cors')

const app = express()

//config JSON response
app.use(express.json())

// Solve Cors 
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))

// Public folder for images 
app.use(express.static('public'))


// Routes
const userRoutes = require('./routes/UserRoutes')
const PetRoutes = require('./routes/PetRoutes')


app.use('/users', userRoutes)
app.use('/pets', PetRoutes)

app.listen(5000)
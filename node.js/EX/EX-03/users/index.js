const { Router } = require('express')
const express = require ('express')
const router = express.Router()
const path = require ('path')
const basePath = path.join(__dirname, '../templates')// essa variavel esta pegando minha pasta templates



router.get('/user', (req,res) =>{
    res.sendFile(`${basePath}/user.html`)
})


module.exports = router
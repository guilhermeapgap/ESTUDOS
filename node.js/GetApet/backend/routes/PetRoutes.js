const router = require('express').Router()

const PetController = require('../controllers/PetController')

//middlewares
const verifToken = require('../helpers/verify-token')
const {imageUpload}= require('../helpers/image-upload')


router.post('/create',verifToken, imageUpload.array('images'), PetController.create)

router.get('/', PetController.getAll)

router.get('/mypets', verifToken, PetController.getAllUserPets)

module.exports = router
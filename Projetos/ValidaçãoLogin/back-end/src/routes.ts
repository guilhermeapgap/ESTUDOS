import { Router, Request, Response} from 'express'
///import multer from 'multer'

import { CreateUserController } from './controllers/user/createUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
//import { DetaillUserController } from './controllers/user/DetaillUserController'



//import { isAuthenticated } from './middlewares/isAuthenticated'

//import uploadConfig from './config/multer'

const router = Router()

//const upload = multer(uploadConfig.upload("./tmp"))


// Rotas user
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

//router.get('/me',isAuthenticated, new DetaillUserController().handle)




export { router }
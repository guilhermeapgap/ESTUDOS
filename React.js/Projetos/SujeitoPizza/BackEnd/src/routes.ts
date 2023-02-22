import { Router, Request, Response} from 'express'

import { CreateUserController } from './controllers/user/createUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetaillUserController } from './controllers/user/DetaillUserController'


import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router()


router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me',isAuthenticated, new DetaillUserController().handle)

export { router }
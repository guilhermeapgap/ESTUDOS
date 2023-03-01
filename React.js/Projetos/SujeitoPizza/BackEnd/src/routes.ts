import { Router, Request, Response} from 'express'

import { CreateUserController } from './controllers/user/createUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetaillUserController } from './controllers/user/DetaillUserController'

import { CreateCategoryController } from './controllers/Category/CreateCategoryController'
import { ListCategoryController } from './controllers/Category/ListCategoryController'

import { CreateProductController } from './controllers/products/CreateProductController'

import { isAuthenticated } from './middlewares/isAuthenticated'

const router = Router()

// Rotas user
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me',isAuthenticated, new DetaillUserController().handle)

// Rotas category
router.post('/category' , isAuthenticated, new CreateCategoryController().handle)

router.get('/category' , isAuthenticated, new ListCategoryController().handle)

// Rotas product
router.post('/product', isAuthenticated, new CreateProductController().handle)
export { router }
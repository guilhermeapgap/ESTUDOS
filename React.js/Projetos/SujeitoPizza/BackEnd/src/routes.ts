import { Router, Request, Response} from 'express'
import multer from 'multer'

import { CreateUserController } from './controllers/user/createUserController'
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetaillUserController } from './controllers/user/DetaillUserController'

import { CreateCategoryController } from './controllers/Category/CreateCategoryController'
import { ListCategoryController } from './controllers/Category/ListCategoryController'

import { CreateProductController } from './controllers/products/CreateProductController'
import { ListByCategoryController } from './controllers/products/ListByCategoryController'

import { CreateOrderController } from './controllers/order/CreateOrderController'
import { RemoveOrderController } from './controllers/order/RemoveOrderController'
import { AddItemController } from './controllers/order/AddItemController'
import { RemoveItemController } from './controllers/order/RevomeItemController'

import { isAuthenticated } from './middlewares/isAuthenticated'

import uploadConfig from './config/multer'

const router = Router()

const upload = multer(uploadConfig.upload("./tmp"))


// Rotas user
router.post('/users', new CreateUserController().handle)

router.post('/session', new AuthUserController().handle)

router.get('/me',isAuthenticated, new DetaillUserController().handle)

// Rotas category
router.post('/category' , isAuthenticated, new CreateCategoryController().handle)

router.get('/category' , isAuthenticated, new ListCategoryController().handle)

// Rotas product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)

router.get('/category/product', isAuthenticated, new ListByCategoryController().handle)


// Rotas order
router.post('/order', isAuthenticated, new CreateOrderController().handle)

router.delete('/order', isAuthenticated, new RemoveOrderController().handle)

router.post('/order/add', isAuthenticated, new AddItemController().handle)

router.delete('/order/remove', isAuthenticated, new RemoveItemController().handle)

export { router }
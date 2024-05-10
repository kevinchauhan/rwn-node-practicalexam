import { Router } from 'express'
import UserController from '../controllers/UserController.js'

const userRouter = Router()

const userController = new UserController()

userRouter.get('/register', userController.signupPage)
userRouter.post('/register', userController.signup)

userRouter.get('/login', userController.loginPage)
userRouter.post('/login', userController.login)

userRouter.get('/logout', userController.logout)

export default userRouter
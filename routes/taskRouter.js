import { Router } from 'express'
import TaskController from '../controllers/TaskController.js'
import authenticate from '../middlewares/authenticate.js'

const taskRouter = Router()

const taskController = new TaskController()

taskRouter.get('/my', authenticate, taskController.get)
taskRouter.get('/all', authenticate, taskController.all)

taskRouter.get('/add', authenticate, taskController.addForm)
taskRouter.post('/add', authenticate, taskController.add)

taskRouter.get('/edit/:id', authenticate, taskController.editForm)
taskRouter.post('/edit/:id', authenticate, taskController.update)

taskRouter.get('/delete/:id', authenticate, taskController.delete)

export default taskRouter
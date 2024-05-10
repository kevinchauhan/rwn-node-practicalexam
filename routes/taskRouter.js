import { Router } from 'express'
import TaskController from '../controllers/TaskController.js'

const taskRouter = Router()

const taskController = new TaskController()

taskRouter.get('/my', taskController.get)
taskRouter.get('/add', taskController.addForm)
taskRouter.post('/add', taskController.add)

export default taskRouter
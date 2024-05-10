import taskModel from "../models/taskModel.js"

class TaskController {

    async get(req, res) {
        try {
            const user = req.user
            const tasks = await taskModel.find({ userId: user._id })
            res.render('pages/taskList', { tasks })
        } catch (error) {
            console.log(error)
        }

    }
    async all(req, res) {
        try {
            const user = req.user
            if (user.role === 'user') {
                return res.redirect('/task/my')
            }
            const tasks = await taskModel.find().populate('userId')
            console.log(tasks)
            res.render('pages/admin/taskList', { tasks })
        } catch (error) {
            console.log(error)
        }

    }

    addForm(req, res) {
        res.render('pages/taskForm')
    }

    async add(req, res) {
        try {
            const user = req.user
            const { title, description } = req.body
            const data = await taskModel.create({ title, description, userId: user._id })

            console.log('task added')
            res.status(201).redirect(`/task/my`)
        } catch (error) {
            console.log(error)
            res.status(500).redirect('back')
        }

    }

    async editForm(req, res) {
        try {
            const { id } = req.params
            const task = await taskModel.findById(id)
            res.render('pages/taskEditForm', { task })
        } catch (error) {
            console.log(error)
        }
    }

    async update(req, res) {
        try {
            const { title, description } = req.body
            const { id } = req.params
            const data = await taskModel.findByIdAndUpdate(id, { title, description })

            console.log('task updated')
            res.status(201).redirect(`/task/my`)
        } catch (error) {
            console.log(error)
            res.status(500).redirect('back')
        }

    }

    async delete(req, res) {
        try {
            const { id } = req.params
            const data = await taskModel.findByIdAndDelete(id)

            console.log('task deleted')
            res.status(201).redirect(`/task/my`)
        } catch (error) {
            console.log(error)
            res.status(500).redirect('back')
        }

    }

}

export default TaskController
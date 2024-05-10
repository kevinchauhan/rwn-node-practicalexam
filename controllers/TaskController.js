
class TaskController {

    get(req, res) {
        res.render('pages/taskList')
    }

    addForm(req, res) {
        res.render('pages/taskForm')
    }

}

export default TaskController
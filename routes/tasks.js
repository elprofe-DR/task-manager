const express = require('express')
const router = express.Router()
const {getAllTasks, createTask, getSTask, updateTask, deletTask} = require('../controllers/tasks.js')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSTask).patch(updateTask).delete(deletTask)

module.exports = router

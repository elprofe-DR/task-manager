const Task = require('../models/task.js')

const getAllTasks = async (req, res) => {
  try {
    const getAllTks = await Task.find({})
    res.status(200).json({getAllTks})
  } catch (e) {
    res.status(500).json({msg:e})
  }
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
  } catch (err) {
    res.status(500).json({message:err})
  }
}

const getSTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})

    if (!task) {
      return res.status(404).json({msg:`no task with id: ${taskID}`})
    }

    res.status(200).json({task})
  } catch (e) {
    res.status(500).json({msg:e})
  }
}

const deletTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if (!task) {
      return res.status(404).json({msg: `no task with id: ${taskID}`})
    }

    res.status(200).json({task})
  } catch (e) {
    res.status(500).json({msg:e})
  }
}

const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const data = req.body
    const task = await Task.findOneAndUpdate({_id:taskID}, data, {new:true, runValidators:true})

    if (!task) {
      return res.status(404).json({msg: `No task with id : ${taskID}`})
    }

    res.status(200).json({task})
  } catch (e) {
    res.status(500).json({msg: e})
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getSTask,
  updateTask,
  deletTask
}

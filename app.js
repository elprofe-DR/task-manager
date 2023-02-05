const connectDB = require('./db/connect.js')
const express = require('express')
const app = express()
const tasks = require('./routes/tasks.js')
require('dotenv').config()
//middleware
app.use(express.json())

//routes
app.get('/hello', (req, res) => {
  res.status(200).send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

//app.get('/api/v1/tasks') ---get all the tasks
//app.post('/api/v1/tasks') ---create a new tasks
//app.get('/api/v1/tasks/:id') ---get single tasks
//app.patch('/api/v1/tasks/:id') ---update tasks
//app.delete('/api/v1/tasks/:id') ---delete task

const port = 3000

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URI)
    app.listen(port, (req, res) => {console.log(`Server is listening on port.... ${port}`)})
  } catch (e) {
    console.log(e);
  }
}
// console.log(process.env.MONGODB_URI)
start()

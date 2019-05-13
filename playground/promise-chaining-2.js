require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5cd863606779692019908f7e')
// .then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// })
// .then((result) => {
//     console.log(result)
// })
// .catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id, { completed: false })
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount('5cd7e55bc5a8a13a7d2b2799')
.then((count) => {
    console.log(count)
})
.catch((e) => {
    console.log(e)
})
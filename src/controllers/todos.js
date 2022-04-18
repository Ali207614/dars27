const {Todo} = require('../models/model')

class TodoController {
    async create(req, res) {
        const {text} = req.body
        const todo = await Todo.create({text})
        return res.json(todo)
    }

    async getAll(req, res) {
        const todos = await Todo.findAll({
            order:[
                ['id','ASC']
            ]
        })
        return res.json(todos)
    }

    async update(req, res) {
        const { text , id } = req.body
        const todos = await Todo.update(
            {text}
           , {
            where: { id }
           })
        return res.json({message:"OK" , todos})
    }

    async delete(req, res) {
        const {  id } = req.body
        const todos = await Todo.destroy({
            where: {
              id
            }
          });
        return res.json({message:"OK" , todos})
    }
}

module.exports = new TodoController()
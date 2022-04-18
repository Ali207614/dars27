const Router = require('express')
const router = new Router()
const todoController = require('../controllers/todos')

router.get('/todo',todoController.getAll)
router.post('/todo',todoController.create)
router.put('/todo',todoController.update)
router.delete('/todo',todoController.delete)

module.exports = router

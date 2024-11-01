//
const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todoController');

router.get('/todoRoutes', todoController.getAlltodoRoutes);
router.post('/todoRoutes', todoController.createTodo);
router.put('/todoRoutes/:id', todoController.updateTodo);
router.delete('/todoRoutes/:id', todoController.deleteTodo);


module.exports = router;
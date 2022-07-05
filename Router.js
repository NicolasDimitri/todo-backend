const express = require('express');
const TodoController = require('./controllers/TodoController');
const Router = express.Router();

Router.get('/', TodoController.getAllTodos);

Router.post('/', TodoController.createTodo);

Router.put('/:id', TodoController.updateTodo);

Router.delete('/:id', TodoController.deleteTodo);

module.exports = Router;
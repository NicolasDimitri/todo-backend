const express = require('express');
const TodoController = require('./controllers/TodoController');
const Router = express.Router();

Router.get('/', TodoController.getAllTodos);

Router.post('/', TodoController.createTodo);

module.exports = Router;
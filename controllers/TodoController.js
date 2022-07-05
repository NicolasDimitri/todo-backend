const TodoService = require('../services/TodoService');

const getAllTodos = async (req, res) => {
    const todos = await TodoService.getAllTodos();
    return res.status(200).json(todos);
};

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    const todo = await TodoService.deleteTodo(id);
    return res.status(200).json(todo);
};

const updateTodo = async (req, res) => {
    const { id } = req.params;
    const { todo,completed } = req.body;
    const result = await TodoService.updateTodo(id, todo, completed);
    return res.status(200).json(result);
};

const createTodo = async (req, res) => {
    const result = await TodoService.createTodo(req.body);
    return res.status(200).json(result);
};

module.exports = {
    getAllTodos,
    deleteTodo,
    updateTodo,
    createTodo,
};


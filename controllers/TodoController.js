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
    const { title,completed } = req.body;
    const todo = await TodoService.updateTodo(id, title, completed);
    return res.status(200).json(todo);
};

const createTodo = async (req, res) => {
    const { title, completed } = req.body;
    const todo = await TodoService.createTodo(title, completed);
    return res.status(200).json(todo);
};

module.exports = {
    getAllTodos,
    deleteTodo,
    updateTodo,
    createTodo,
};

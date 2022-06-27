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

module.exports = {
    getAllTodos,
    deleteTodo
};


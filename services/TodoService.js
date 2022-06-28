const { Todo } = require('../models');

const getAllTodos = async () => {
    const todos = await Todo.findAll();
    return todos;
};

const deleteTodo = async (id) => {
    const todo = await Todo.destroy({
        where: {
            id,
        },
    });
    return todo;
};

const updateTodo = async (id, todo) => {
    const updatedTodo = await Todo.update(todo, {
        where: {
            id,
        },
    });
    return updatedTodo;
};

module.exports = {
    getAllTodos,
    deleteTodo,
    updateTodo,
};
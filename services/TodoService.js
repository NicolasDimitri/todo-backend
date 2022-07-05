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

const createTodo = async (todo) => {
    const newTodo = await Todo.create(todo);
    return newTodo;
};

module.exports = {
    getAllTodos,
    deleteTodo,
    updateTodo,
    createTodo,
};
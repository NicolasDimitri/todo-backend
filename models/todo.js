const Todo = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        todo: DataTypes.STRING,
        completed: DataTypes.BOOLEAN,
    });
    return Todo;
};

module.exports = Todo;
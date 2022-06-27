const Todo = (sequelize, DataTypes) => {
    const Todo = sequelize.define('Todo', {
        todo: DataTypes.STRING
    });
    return Todo;
};

module.exports = Todo;
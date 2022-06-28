'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.addColumn('Todos', 'completed', {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        });
    },

    async down (queryInterface) {
        await queryInterface.removeColumn('Todos', 'completed');
    }
};

const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Position = sequelize.define('position', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    type: {
        type: Sequelize.ENUM('actor', 'director', 'screenwriter', 'cameraman'),
        allowNull: false
    }
})


const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Position = sequelize.define('position', {
    type: {
        type: Sequelize.ENUM('actor', 'director', 'screenwriter', 'cameraman'),
        allowNull: false
    }
})

module.exports = Position

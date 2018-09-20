const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Project = sequelize.define('project', {
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

module.exports = Project

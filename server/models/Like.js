const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const Like = sequelize.define('like', {
    uuid: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }
})

module.exports = Like

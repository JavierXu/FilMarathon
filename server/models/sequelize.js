const Sequelize = require('sequelize')
const { mysql: { host, port, db, pass, user } } = require('../config')

const sequelize = new Sequelize(db, user, pass, {
    host,
    port,
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
})

module.exports = sequelize

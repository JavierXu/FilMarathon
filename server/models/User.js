const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const User = sequelize.define('user', {
    openid: {
        type: Sequelize.TEXT,
        primaryKey: true
    },
    email: {
        type: Sequelize.TEXT,
        validate: {
            isEmail: true
        }
    },
    introduction: {
        type: Sequelize.TEXT,
        defaultValue: '一只电影爱好者'
    },
    likedid: {
        type: Sequelize.STRING
    },
    likeid: {
        type: Sequelize.TEXT
    },
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    nickname: {
        type: Sequelize.TEXT,
        allowNull: false,
        unique: true
    },
    school: {
        type: Sequelize.TEXT
    },
    skill: {
        type: Sequelize.TEXT
    },
    wechat_id: {
        type: Sequelize.TEXT,
        unique: true
    }
})

module.exports = User

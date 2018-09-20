const Sequelize = require('sequelize')
const sequelize = require('./sequelize')

const User = sequelize.define('user', {
    openid: {
        type: Sequelize.STRING(128),
        allowNull: false
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
    name: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    nickname: {
        type: Sequelize.STRING(32),
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
        type: Sequelize.STRING(100),
        unique: true
    }
})

module.exports = User

const User = require('./User')
const Like = require('./Like')
const Project = require('./Project')
const Position = require('./Position')
const sequelize = require('./sequelize')

Like.belongsTo(User, {
    foreignKey: 'byUser',
    as: 'likesSent'
})

Like.belongsTo(User, {
    foreignKey: 'toUser',
    as: 'likesReceived'
})

Project.belongsToMany(User, {
    through: 'ProjectParticipant'
})

Project.hasOne(User, {
    foreignKey: 'owner'
})

Position.belongsTo(Project)

Position.belongsTo(User)

sequelize.sync()

module.exports = {
    User,
    Like,
    Project,
    Position
}

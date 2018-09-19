const User = require('./User')
const Like = require('./Like')
const Project = require('./Project')
const Position = require('./Position')

User.hasMany(Like, {
    foreignKey: 'byUser',
    as: 'likesSent'
})

User.hasMany(Like, {
    foreignKey: 'toUser',
    as: 'likesReceived'
})

User.hasMany(Project, {
    foreignKey: 'participants'
})

Project.belongsTo(User, {
    foreignKey: 'owner'
})

Project.hasMany(Position, {
    as: 'vacancies'
})

Position.belongsTo(User)

module.exports = {
    User,
    Like,
    Project,
    Position
}

const { User } = require('../models')

module.exports = async ctx => {
  var nickname = ctx.query['nickname']
  const json = await User.findOne({ where: { nickname } })
  ctx.state.data = json
}
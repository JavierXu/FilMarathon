const { User } = require('../models')

module.exports = async ctx => {
  var openid = ctx.query['openid']
  const json = await User.findOne({ where: { openid } })
  ctx.state.data = json
}
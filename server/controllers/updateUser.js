const { User } = require('../models')

module.exports = async ctx => {
  const json = ctx.request.body
  await User.update(json, { where: { openid: json.openid } })
}
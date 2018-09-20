const { User } = require('../models')

module.exports = async ctx => {
  const json = ctx.request.body
  await User.create(json);
  ctx.state.data = json
}
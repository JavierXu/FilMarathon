const { User } = require('../models')

module.exports = async ctx => {
  const json = await User.findAll()
  ctx.state.data = json
}
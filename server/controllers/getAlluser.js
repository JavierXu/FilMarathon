const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const json = await mysql('filmarathon').select('*')
  ctx.state.data = json
}
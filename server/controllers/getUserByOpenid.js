const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var openid = ctx.query['openid']
  const json = await mysql('filmarathon').select('*').where('openid', openid)
  ctx.state.data = json
}
const { mysql } = require('../qcloud')

module.exports = async ctx => {
  var nickname = ctx.query['nickname']
  const json = await mysql('filmarathon').select('*').where('nickname', nickname)
  ctx.state.data = json
}
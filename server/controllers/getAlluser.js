const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const json = await mysql('filmarathon').select('*')
  console.log(json)
  ctx.state.data = json
}
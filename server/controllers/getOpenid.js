// TODO: GET openid from server side
// const { appId } = require('../qcloud')
// const { appSecret } = require('../qcloud')

module.exports = async ctx => {
  ctx.state.data = 'Hello world! '
}
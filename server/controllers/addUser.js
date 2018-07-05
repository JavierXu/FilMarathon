const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const json = ctx.request.body
  // TODO: openid, nickname
  await mysql('filmarathon').insert({ nickname: json['nickname'], name: json['name'], email: json['email'], wechat_id: json['wechatid'], school: json['school'], skill: json['skill'], introduction: json['intro']})
  ctx.state.data = json
}
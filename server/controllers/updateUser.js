const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const json = ctx.request.body

  await mysql('filmarathon').update({ name: json['name'] }).where({ openid: json['userId'] })
  await mysql('filmarathon').update({ email: json['email'] }).where({ openid: json['userId'] })
  await mysql('filmarathon').update({ wechatid: json['wechatid'] }).where({ openid: json['userId'] })
  await mysql('filmarathon').update({ school: json['school'] }).where({ openid: json['userId'] })
  await mysql('filmarathon').update({ skill: json['skill'] }).where({ openid: json['userId'] })
  await mysql('filmarathon').update({ introduction: json['intro'] }).where({ openid: json['userId'] })
}
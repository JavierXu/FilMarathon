const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const json = ctx.request.body
  var likedId = await mysql('filmarathon').select('likedid').where({ openid: json['userId'] })
  ctx.state.data = json
  likedId = likedId[0]['likedid'] + ',' + json['likedId']
  await mysql('filmarathon').update({likedid: likedId}).where({openid: json['userId']})
}
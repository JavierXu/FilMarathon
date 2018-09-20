const { Like } = require('../models')

module.exports = async ctx => {
  const json = ctx.request.body

  await Like.create({
    toUser: json.likeId,
    byUser: json.userId,
  })

  var otherLikeId = await mysql('filmarathon').select('likeid').where({ openid: json['likeId'] })
  json['otherLikeId'] = otherLikeId[0]['likeid']
  ctx.state.data = json
  
}
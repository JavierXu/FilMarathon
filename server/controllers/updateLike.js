const { mysql } = require('../qcloud')

module.exports = async ctx => {
  const json = ctx.request.body

  var likeId = await mysql('filmarathon').select('likeid').where({ openid: json['userId'] })
  likeId = likeId[0]['likeid'] + ',' + json['likeId']
  await mysql('filmarathon').update({likeid: likeId}).where({openid: json['userId']})

  var likedId = await mysql('filmarathon').select('likedid').where({ openid: json['likeId'] })
  likedId = likedId[0]['likedid'] + ',' + json['userId']
  await mysql('filmarathon').update({ likedid: likedId }).where({ openid: json['likeId'] })

  var otherLikeId = await mysql('filmarathon').select('likeid').where({ openid: json['likeId'] })
  json['otherLikeId'] = otherLikeId[0]['likeid']
  ctx.state.data = json
  
}
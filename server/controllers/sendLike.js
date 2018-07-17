const { appId } = require('../config')
const { appSecret } = require('../config')
const {notificationId} = require('../config')
const request = require('request')
const Ut = require("../utils")


module.exports = async ctx => {
  const json = ctx.request.body
  var myDate = new Date()
  var openid = json['openid']
  var name = json['user']['name']
  var wechat_id = json['user']['wechat_id']
  var formId = json['formId']
  var grant_type = 'client_credential'
  var opts = {
    url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=' + grant_type + '&appid=' + appId + '&secret=' + appSecret
  }

  try {
    let r1 = await Ut.promiseReq(opts)
    r1 = JSON.parse(r1)
    const access_token = r1.access_token
    var opts2 = {
      url: 'https://api.weixin.qq.com/cgi-bin/message/wxopen/template/send?access_token=' + access_token,
      method: 'POST',
      json: true,
      body: {
        touser: openid,
        template_id: notificationId,
        form_id: formId,
        data: {
          keyword1: {
            value: name
          },
          keyword2: {
            value: myDate.toLocaleString()
          },
          keyword3: {
            value: '微信号：' + wechat_id
          }
        }
      }
    }
    try {
      let r2 = await Ut.promiseReq(opts2)
      ctx.state.data = r2
    }
    catch (e) {
      console.log(e)
      ctx.state.data = e
    }
    // ctx.state.data = access_token
  }
  catch (e) {
    console.log(e)
    ctx.state.data = e
  }
  
}
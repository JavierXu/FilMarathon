const { appId } = require('../config')
const { appSecret } = require('../config')
const https = require('https')
const request = require('request')
const Ut = require("../utils")

module.exports = async ctx => {
  console.log('test')
  try {
    let grant_type = 'authorization_code'
    let code = ctx.query['code']
    // console.log('req code: ', code);
    let opts = {
      url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appId + '&secret=' + appSecret + '&js_code=' + code + '&grant_type=' + grant_type
    }
    let r1 = await Ut.promiseReq(opts);
    r1 = JSON.parse(r1);
    console.log('r1 is:', r1);
    openid = r1.openid
    ctx.state.data = r1
  }
  catch (e) {
    console.log(e);
    ctx.response.status = 403
  }



}
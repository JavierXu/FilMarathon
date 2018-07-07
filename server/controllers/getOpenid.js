// TODO: GET openid from server side
const { appId } = require('../config')
const { appSecret } = require('../config')
const https = require('https')
const request = require('request')

const options = {
  hostname: '208074655.filmarathon.xyz',
  // port: 80,
  path: '/weapp/getAlluser',
  method: 'GET'
};

module.exports = async ctx => {
  console.log('test')
  request('https://www.baidu.com', function (error, response, body) {
    console.log(response)
    if (!error && response.statusCode == 200) {
      console.log(body)
    }
    ctx.state.data = response
  })
  // var req = https.request(options, (res) => {
  //   console.log('statusCode:', res.statusCode);
  //   console.log('headers:', res.headers);

  //   res.on('data', (d) => {
  //     var str = ''
  //     str += d
  //     ctx.state.data = res.statusCode
  //   });

  //   // cts.state.data = res
  //   req.on('error', (e) => {
  //     console.error(e);
  //     ctx.state.data = e
  //   });
  //   req.end();

  // });


}
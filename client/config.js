/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
// var host = 'https://ev0o1srm.qcloud.la';
var host = 'https://208074655.filmarathon.xyz';

var config = {

  appId: 'wxb150fb1266bae15b',

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,

        // 注册用户
        addUserUrl: `${host}/weapp/addUser`,

        getAlluserUrl: `${host}/weapp/getAlluser`,
        getUserUrl: `${host}/weapp/getUser`,
        getOpenidUrl: `${host}/weapp/getOpenid`,
        sendLikeUrl: `${host}/weapp/sendLike`,
        
    }
};

module.exports = config;

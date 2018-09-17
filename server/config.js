const CONF = {
    port: process.env.PORT || '5757',
    rootPathname: process.env.ROOT_PATHNAME || '',

    // 微信小程序 App ID
    appId: process.env.WX_APP_ID || 'wxb150fb1266bae15b',

    // 微信小程序 App Secret
    appSecret: process.env.WX_APP_SECRET || '0919cd49bd595536bf6d05cef99a696f',

    // 推送消息模版ID
    notificationId: process.env.NOTIFICATION_ID || 'XWJcVJtFnfrRLoslOF6HTQ1hdAOzj9h9nB5Ny_UEVLE',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: process.env.USE_QCLOUD_LOGIN !== 'DISABLED',

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: process.env.MYSQL_HOST || 'localhost',
        port: process.env.MYSQL_PORT || 3306,
        user: process.env.MYSQL_USER || 'root',
        db: process.env.MYSQL_DB || 'cAuth',
        pass: process.env.MYSQL_PASS || 'wxb150fb1266bae15b',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: process.env.COS_REGION || 'ap-guangzhou',
        // Bucket 名称
        fileBucket: process.env.COS_FILEBUCKET || 'qcloudtest',
        // 文件夹
        uploadFolder: process.env.COS_UPLOADFOLDER || ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: process.env.WX_MSG_TOKEN || 'abcdefgh'
}

module.exports = CONF

/**
 * @file controllers/searchUsers.js
 * @description 以关键字批量搜索用户
 * 
 * @param keyword String 搜索关键字，会在 nickname, school, introduction 三个字段内检索
 * @param filter (optional) Object 限定条件
 * 
 * @returns { users: [user] }
 */

const { mysql } = require('../qcloud')

module.exports = async ctx => {
    const { keyword, filter = {} } = ctx.request.body;

    const users = await mysql('filmarathon').where(builder => {
        builder.where('nickname', 'like', `%${keyword}%`)
            .orWhere('school', 'like', `%${keyword}%`)
            .orWhere('introduction', 'like', `%${keyword}%`)
    }).andWhere(filter).select('openid', 'nickname', 'school', 'introduction', 'skill')

    ctx.state.data = { users }
}
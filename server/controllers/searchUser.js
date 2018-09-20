/**
 * @file controllers/searchUsers.js
 * @description 以关键字批量搜索用户
 * 
 * @param keyword String 搜索关键字，会在 nickname, school, introduction 三个字段内检索
 * @param filter (optional) Object 限定条件
 * 
 * @returns { users: [user] }
 */

const { User } = require('../models')
const { Op } = require('sequelize')

module.exports = async ctx => {
    const { keyword, filter = {} } = ctx.request.body;

    if (!keyword) {
        ctx.state.data = { users: [] }
        return
    }

    const users = await User.findAll({
        attributes: ['openid', 'nickname', 'school', 'introduction', 'skill'],
        where: {
            [Op.and]: [{
                [Op.or]: [
                    { nickname: { [Op.like]: keyword } },
                    { school: { [Op.like]: keyword } },
                    { introduction: { [Op.like]: keyword } }
                ]
            }, filter]
        }
    })

    ctx.state.data = { users }
}
// pages/register.js
const app = getApp()
var config = require('../../config')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userinfo:{},
    name: {},
    email: {},
    wechatid: {},
    school: {},
    skill: {},
    intro: {},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    }
  },

  getName: function(e) {
    this.setData({
      name: e.detail.value
    });
  },

  getEmail: function(e) {
    this.setData({
      email: e.detail.value
    });
  },

  getWechatid: function (e) {
    this.setData({
      wechatid: e.detail.value
    });
  },

  getSchool: function(e) {
    this.setData({
      school: e.detail.value
    });
  },

  getSkill: function (e) {
    this.setData({
      skill: e.detail.value
    });
  },

  getIntro: function (e) {
    this.setData({
      intro: e.detail.value
    });
  },

  registerUser: function(e) {
    wx.request({
      url: config.service.addUserUrl,
      method: 'POST',
      data: {
        // TODO: openid, nickname
        name: this.data.name,
        email: this.data.email,
        wechatid: this.data.wechatid,
        school: this.data.school,
        skill: this.data.skill,
        intro: this.data.intro,
      },
      success: function (res) {
        console.log(res.data)
      }
    })

    wx.setStorageSync('registered', true)

    wx.navigateTo({
      url: '../playground/playground',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
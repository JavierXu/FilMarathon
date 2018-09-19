// pages/register.js
const app = getApp()
const config = require('../../config')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    name: '',
    email: '',
    wechatid: '',
    school: '',
    skill: '',
    intro: '',
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

  updateUser: function (e) {
    var that = this;
    var missInfo = !(that.data.name.replace(/\s/g, "") && this.data.email.replace(/\s/g, "") && this.data.wechatid.replace(/\s/g, "") && this.data.school.replace(/\s/g, "") && this.data.skill.replace(/\s/g, "") && this.data.intro.replace(/\s/g, ""));


    if (missInfo) {
      wx.showToast({
        title: '请填写完整信息！',
        icon: 'none',
      })
      return -1
    }

    wx.showModal({
      title: '提示',
      content: '确认提交?',
      success: function (res) {
        if (res.cancel) {
          return -1
        }
        else {

          wx.request({
            url: config.service.updateUserUrl,
            method: 'POST',
            data: {
              openid: app.globalData.loginData.openid,
              nickname: that.data.userInfo.nickName,
              name: that.data.name,
              email: that.data.email,
              wechatid: that.data.wechatid,
              school: that.data.school,
              skill: that.data.skill,
              intro: that.data.intro,
            },
            success: function (res) {
              console.log(res.data)
              if (res.data.code === -1) {
                wx.showToast({
                  title: '注册失败！',
                  icon: 'none'
                })
              }
              else {
                wx.showToast({
                  title: '注册成功！',
                  icon: 'success'
                })
                wx.navigateTo({
                  url: '../playground/playground',
                })
              }
            }
          })

        }
      }
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
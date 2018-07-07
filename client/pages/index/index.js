//index.js
//获取应用实例
const app = getApp()
const config = require('../../config')

Page({
  data: {
    motto: 'Welcome to FilMarathon',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //事件处理函数
  bindViewTap: function() {

    wx.navigateTo({
      url: '../register/register'
    })
  },

  onLoad: function () {
    wx.clearStorageSync()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
      // navigate to register/playground page
      wx.request({
        url: config.service.getUserUrl,
        method: 'GET',
        data: {
          nickname: this.data.userInfo.nickName,
        },
        success: function (res) {
          console.log(res.data)
          if (res.data.data.length == 0) {
            wx.navigateTo({
              url: '../register/register',
            })
          }
          else {
            wx.navigateTo({
              url: '../playground/playground',
            })
          }
        }
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
        // navigate to register/playground page
        wx.request({
          url: config.service.getUserUrl,
          method: 'GET',
          data: {
            nickname: this.data.userInfo.nickName,
          },
          success: function (res) {
            console.log(res.data)
            if (res.data.data.length == 0) {
              wx.navigateTo({
                url: '../register/register',
              })
            }
            else {
              wx.navigateTo({
                url: '../playground/playground',
              })
            }
          }
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
          // navigate to register/playground page
          wx.request({
            url: config.service.getUserUrl,
            method: 'GET',
            data: {
              nickname: this.data.userInfo.nickName,
            },
            success: function (res) {
              console.log(res.data)
              if (res.data.data.length == 0) {
                wx.navigateTo({
                  url: '../register/register',
                })
              }
              else {
                wx.navigateTo({
                  url: '../playground/playground',
                })
              }
            }
          })
        }
      })
    }
  },

  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })

    // navigate to register/playground page
    wx.request({
      url: config.service.getUserUrl,
      method: 'GET',
      data: {
        nickname: this.data.userInfo.nickName,
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.data.length==0) {
          wx.navigateTo({
            url: '../register/register',
          })
        }
        else {
          wx.navigateTo({
            url: '../playground/playground',
          })
        }
      }
    })
  }
})

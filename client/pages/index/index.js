//index.js
const app = getApp()
const config = require('../../config')

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  bindViewTap: function() {
    console.log(app.globalData)
    wx.navigateTo({
      url: '../profile/profile',
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
      // getUserInfo may come after Page.onLoad 
      // callback is needed
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

// pages/register.js
const app = getApp()
const config = require('../../config')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: [],
    likeIds: '',
    likedIds: '',
    likedName: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    // Get likeIds
    wx.request({
      url: config.service.getUserUrl,
      method: 'GET',
      data: {
        nickname: app.globalData.userInfo.nickName,
      },
      success: function (res) {
        that.setData({
          likeIds: res.data.data[0]['likeid'],
          likedIds: res.data.data[0]['likedid'] 
        })

        wx.request({
          url: config.service.getAlluserUrl,
          method: 'GET',
          success: function (res) {
            var userData = res.data.data
            for (var i = 0; i < userData.length; i++) {
              // Already liked
              if (that.data.likeIds &&that.data.likeIds.indexOf(userData[i].openid) != -1) {
                userData[i]['color'] = 'pink'
                userData[i]['like_status'] = 'LIKED'
              }
              else {
                userData[i]['color'] = 'gainsboro'
                userData[i]['like_status'] = 'LIKE'
                if (that.data.likedIds && that.data.likedIds.indexOf(userData[i].openid) != -1) {
                  userData[i]['color'] = 'lightsalmon'
                  var likedName = that.data.likedName
                  if (!likedName) {
                    that.setData({
                      likedName: likedName + userData[i]['name']
                    })
                  }
                  else {
                    that.setData({
                      likedName: likedName + '、' + userData[i]['name']
                    })
                  }
                }
              }
            }
            that.setData({
              user: userData
            })
            console.log(that.data.user)
          }
        })

      }
    })

   
  },

  likeUser: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index
    var formId = e.detail.formId
    var userData = this.data.user
    var that = this

    ///////////
    // DEBUG //
    ///////////
    // if(true) {
    if (userData[index]['like_status'] === 'LIKE') {

      // Check if user has used 10 likes
      if (this.data.likeIds && this.data.likeIds.split(',').length - 1 >= 10) {
        wx.showToast({
          icon: 'none',
          title: '您已使用完10次LIKE！Good Luck!',
        })
        return -1
      }

      // Check if user likes itself
      if (app.globalData.loginData.openid === userData[index]['openid']) {
        wx.showToast({
          icon: 'none',
          title: '请将您宝贵的LIKE次数用于其他人吧！',
        })
        return -1
      }

      wx.showModal({
        title: '提示',
        content: '确认喜欢该用户后，该用户会获得你的微信号等信息',
        success: function (res) {
          if (res.confirm) {
            userData[index]['like_status'] = 'LIKED'
            userData[index]['color'] = 'pink'
            that.setData({
              user: userData,
            })

            // Update like_id
            wx.request({
              url: config.service.updateLikeUrl,
              method: 'POST',
              data: {
                userId: app.globalData.loginData.openid,
                likeId: userData[index]['openid'],
              },
              success: function (res) {
                console.log(res.data)

                // Check if they both liked each other
                var otherLikeId = res.data.data.otherLikeId
                if (!otherLikeId) {
                  console.log("no match")
                  return -1
                }
                if (otherLikeId && otherLikeId.indexOf(app.globalData.loginData.openid) === -1) {
                  console.log("no match")
                  return -1
                }

                // Request to send wechat_id info
                wx.request({
                  url: config.service.sendLikeUrl,
                  method: 'POST',
                  data: {
                    user: userData[index],
                    openid: app.globalData.loginData.openid,
                    formId: formId,
                  },
                  success: function (res) {
                    console.log(res.data)
                  }
                })

              }
            })

            
          }
        }
      })
    }
    // else {
    //   userData[index]['like_status'] = 'LIKE'
    //   userData[index]['color'] = 'gainsboro'
    //   this.setData({
    //     user: userData
    //   })
    // }
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
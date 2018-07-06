// pages/register.js
const app = getApp()
const config = require('../../config')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    user: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: config.service.getAlluserUrl,
      method: 'GET',
      success: function (res) {
        // console.log(res.data.data)
        var userData = res.data.data
        for (var i=0; i<userData.length; i++) {
          userData[i]['color'] = 'gainsboro'
          userData[i]['like_status'] = 'LIKE'
        }
        that.setData({
          user: userData
        })
        console.log(that.data.user)
      }
    })
  },

  likeUser: function(e) {
    console.log(e);
    var index = e.currentTarget.dataset.index
    var userData = this.data.user
    if (userData[index]['like_status']==='LIKE') {
      userData[index]['like_status'] = 'UNLIKE'
      userData[index]['color'] = 'pink'
      this.setData({
        user: userData
      })
    }
    else {
      userData[index]['like_status'] = 'LIKE'
      userData[index]['color'] = 'gainsboro'
      this.setData({
        user: userData
      })
    }
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
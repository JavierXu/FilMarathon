// pages/register.js
const app = getApp()
const config = require('../../config')

Page({
  /**
   * 页面的初始数据
   */
  data: {
    color: 'gainsboro',
    like_status: 'LIKE',
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
        console.log(res.data.data)
        that.setData({
          user: res.data.data
        })
      }
    })
  },

  likeUser: function(e) {
    console.log(e);
    if (this.data.like_status==='LIKE') {
      this.setData({
        color: 'pink',
        like_status: 'UNLIKE'
      })
    }
    else {
      this.setData({
        color: 'gainsboro',
        like_status: 'LIKE'
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
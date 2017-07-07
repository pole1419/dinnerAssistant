//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
  },
  toPage: function(event) {
    const page = event.target.dataset.page
    const href = `../${page}/${page}`
    wx.navigateTo({
      url: href
    })
  },
  onLoad: function () {
  }
})

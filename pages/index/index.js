import util from '../../utils/util'

let app = getApp()

Page({
  data: {
    bannerUrl: 'https://s4.sinaimg.cn/mw690/64e35cbfgdb28162dada3&690',
    dateStr: '',
    recommend: '',
    isChanging: false,
    randomConfig: {
        duration: 1, // 秒
        interval: 50, //毫秒
    }
  },

  onShow() {
    this.initDateStr()
    this.initRecommend()  
  },

  initDateStr() {
    const n = new Date()
    this.setData({
        dateStr: `${util.getDateStr(n)} ${util.getDayStr(n)}`
    })
  },

  initRecommend() {
      const list = app.globalData.menu
      this.setData({
          recommend: list[0]
      })
  },

  changeRecommend() {
      this.setData({
          isChanging: true
      })
      const menu = app.globalData.menu
      const end = setInterval(() => {
          const idx = Math.floor(Math.random() * menu.length)
          this.setData({
              recommend: menu[idx]
          })
      }, this.data.randomConfig.interval)

      setTimeout(() => {
        clearInterval(end)
        this.setData({
            isChanging: false
        })
      }, this.data.randomConfig.duration * 1000)
  },

  confirm() {
      const length = app.globalData.history.length
      if (!length || app.globalData.history[length - 1].dateStr !== this.data.dateStr) {
          app.globalData.history.push({
              dateStr: this.data.dateStr,
              val: this.data.recommend
          })
      } else {
          app.globalData.history[length -1].val = this.data.recommend
      }
      wx.setStorageSync('history', app.globalData.history)
  }

})
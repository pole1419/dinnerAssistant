import util from '../../utils/util'

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
      const list = getApp().data.menu
      this.setData({
          recommend: list[0]
      })
  },

  changeRecommend() {
      if (this.data.isChanging) { return }
      this.setData({
          isChanging: true
      })
      const menu = getApp().data.menu
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
  }

})
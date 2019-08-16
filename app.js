const defaultMenu = require('./utils/config.js').defaultMenu

App({
    globalData: {
        userInfo: null,
        menu: [],
        history: [],
    },

    onLaunch() {
        this.restoreData()
    },


    restoreData: function () {
        const menuStore = wx.getStorageSync('menu') || defaultMenu
        const historyStore = wx.getStorageSync('history') || []
        this.globalData.menu = menuStore
        this.globalData.history = historyStore

    }
    // todo 随机推荐，初始化日期
})

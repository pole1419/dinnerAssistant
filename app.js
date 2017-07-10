//app.js
const defaultMenu = require('./utils/config.js').defaultMenu

App({
    globalData: {
        // userInfo: null
        recommend: '',
        menu: [],
        history: [],
    },

    onLaunch() {
        //调用API从本地缓存中获取数据
        // var logs = wx.getStorageSync('logs') || []
        // logs.unshift(Date.now())
        // wx.setStorageSync('logs', logs)
        this.restoreData()
    },

    restoreData: function () {
        const menuStore = wx.getStorageSync('menu') || defaultMenu
        const historyStore = wx.getStorageSync('history') || []
        this.globalData = {
            menu: menuStore,
            history: historyStore,
        }
    }
    // todo 随机推荐，初始化日期
})

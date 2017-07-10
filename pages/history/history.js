let app = getApp()
Page({
    data: {
        history: [],
        noRecordTip: '你来到了知识的荒野，这里暂时没有记录, 可以在首页点击确定以保存记录'
    },

    onShow() {
        this.initHistory()
    },

    initHistory() {
        this.setData({
            history: app.globalData.history
        })
    },

    clearRecord() {
        wx.showModal({
            title: '清除记录',
            content: '此操作将清除所有本地已选记录，确定执行？',
            showCancel: true,
            success: (res) => {
                if(res.confirm) {
                    this.setData({
                        history: []
                    })
                    wx.setStorageSync('history', [])
                }
            }
        })
    }

})
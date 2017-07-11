let app = getApp()
Page({
    data: {
        inputVal: '',
        menu: [],
        selectedLength: 0,
    },

    onShow() {
        this.initMenu()
    },

    initMenu() {
        const rawMenu = app.globalData.menu
        const temMenu = rawMenu.map(m => {
            return {
                val: m,
                selected: false,
            }
        })
        this.setData({
            menu: temMenu
        })
    },

    addItem(event) {
        const val = event.detail.value.trim()
        if (!val) { return }
        const newMenu = this.data.menu.concat({
            val: val,
            selected: false,
        })
        this.setData({
            inputVal: '',
            menu: newMenu,
        })
        this.storeMenu()
    },

    clickItem(event) {
        const idx = event.currentTarget.dataset.index,
            menu = this.data.menu.map((m, i) => {
                if (i === idx) {
                    return {
                        val: m.val,
                        selected: !m.selected
                    }
                } else {
                    return m
                }
            }),
            selectedLength = menu.filter(m => m.selected).length;
        this.setData({
            menu,
            selectedLength
        })
    },

    deleteAll() {
        wx.showModal({
            title: '移除所有菜单',
            content: '此操作将删除所有已有菜单并稍后由您自行手动添加，确定执行？',
            showCancel: true,
            success: (res) => {
                if (res.confirm) {
                    this.setData({
                        menu: []
                    })
                    app.globalData.menu = []
                    wx.removeStorageSync('menu')
                }
            }
        })

    },

    deleteSelected() {
        this.setData({
            menu: this.data.menu.filter(m => !m.selected)
        })
        app.globalData.menu = this.data.menu.map(m => m.val)
        this.storeMenu()
    },

    storeMenu() {
        wx.setStorageSync('menu', this.data.menu.map(m => m.val))
    }

})
let app = getApp()
Page({
    data: {
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
        console.log(event.keyCode)
        // if(event.type === 'keyup')
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
        this.setData({
            menu: []
        })
        app.globalData.menu = []
    },

    deleteSelected() {
        this.setData({
            menu: this.data.menu.filter(m => !m.selected)
        })
        app.globalData.menu = this.data.menu.map(m => m.val)
    }

})
import { observable, computed } from 'mobx'
import config from '../config'

class Store {
    @observable menuList = config.defaultMenu
    @observable recordList = []

    constructor() {
        this.getStorage()
    }

    addMenu(name) {
        this.menuList.push(name)
        this.setStorage()
    }

    removeMenu(idx) {
        this.menuList.splice(idx, 1)
        this.setStorage()
    }

    clearMenu() {
        this.menuList = []
        this.setStorage()
    }

    addRecord(name) {
        this.recordList.push({
            date: new Date(),
            name,
        })
        this.setStorage()
    }

    clearRecord() {
        this.recordList = []
        this.setStorage()
    }

    setStorage() {
        localStorage.setItem('launchAssistant', JSON.stringify({
            menuList: this.menuList.toJS(),
            recordList: this.recordList.toJS()
        }))
    }

    getStorage() {
        const storage = localStorage.getItem('launchAssistant')
        if (storage) {
            const { menuList, recordList } = JSON.parse(storage)
            this.menuList = menuList
            this.recordList = recordList
        }
    }

}

export default new Store()
export default {
    getDateStr(date = new Date()) {
        if(!(date instanceof Date)) {
            date = new Date(date)
        }
        const y = date.getFullYear(),
              m = date.getMonth() + 1,
              d = date.getDate();
        return `${y}-${m}-${d}`
    },
    
    getWeekStr(date = new Date()) {
        if(!(date instanceof Date)) {
            date = new Date(date)
        }
        const arr = ['日', '一', '二', '三', '四', '五', '六']
        return `星期${arr[date.getDay()]}`
    }
}
export default {
    getDateStr(date = new Date()) {
        const y = date.getFullYear(),
              m = date.getMonth() + 1,
              d = date.getDate();
        return `${y}-${m}-${d}`
    },
    
    getWeekStr(date = new Date()) {
        const arr = ['日', '一', '二', '三', '四', '五', '六']
        return `星期${arr[date.getDay()]}`
    }
}
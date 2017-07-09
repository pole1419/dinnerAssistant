function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}


function getDateSplit(d = new Date) {
    const year = d.getFullYear(),
        month = d.getMonth() + 1,
        date = d.getDate(),
        dayArray = ['日', '一', '二', '三', '四', '五', '六'],
        day = dayArray[d.getDay()];
    return {
        year,
        month,
        date,
        day,
    }
}

function getDateStr(d) {
  const { year, month, date } = getDateSplit(d)
  return `${year}-${month}-${date}`  
}

function getDayStr(d) {
    const { day } = getDateSplit(d)
    return `星期${day}`
}

module.exports = {
  formatTime,
  getDateStr,
  getDayStr,
}

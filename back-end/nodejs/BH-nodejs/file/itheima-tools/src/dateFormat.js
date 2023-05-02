//时间格式化
function dateFormate(time) {
    const dt = new Date(time)

    const y = dt.getFullYear()
    const m = repairZero(dt.getMonth() + 1)
    const d = repairZero(dt.getDate())

    const hh = repairZero(dt.getHours())
    const mm = repairZero(dt.getMinutes())
    const ss = repairZero(dt.getSeconds())

    return `${y}-${m}-${d} ${hh}:${mm}:${ss}` //YYYY-MM-DD HH:MM:SS
}

//补零
function repairZero(obj) {
    return obj > 9 ? obj : '0' + obj
}

module.exports = {
    dateFormate
}
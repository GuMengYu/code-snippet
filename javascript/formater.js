
/**
 * 容量单位转换
 * @param _bytes 大小（字节）
 * @param {*} k 标准大小 （1024 ｜ 1000）
 * @returns
 */
function bytesToSize(_bytes, k = 1024) {
    const bytes = +_bytes
    if (bytes === 0) return '0 B'
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k))

    return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
}

/**
 * 千位分割
 * @param number
 * @returns {string}
 */
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 示例用法
const number = 1234567.89;
const formattedNumber = formatNumberWithCommas(number);
console.log(formattedNumber); // 输出 "1,234,567.89"



/**
 * 格式化时间
 * @param t
 * @param i18n
 */
function formatDuring(t = 0, i18n = false) {
    const HOUR = 1000 * 60 * 60
    const d = Math.floor(t / (HOUR * 24))
    const h = Math.floor((t % (HOUR * 24)) / HOUR)
    const m = Math.floor((t % HOUR) / (1000 * 60))
    const s = Math.floor((t % (1000 * 60)) / 1000)

    if (i18n) {
        let text = ''
        d && (text += `${d}${i18n ?? 'd'}`)
        h && (text += `${h}${i18n ?? 'h'}`)
        m && (text += `${m}${i18n ?? 'm'}`)
        s && (text += `${s}${i18n ?? 's'}`)
        return text || '-'
    } else {
        return `${h > 0 ? `${h < 10 ? `0${h}` : h}:` : ''}${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`
    }
}

/**
 * 格式化数字
 * @param number
 */
export const formatNumber = (number, fractionDigits = 2) => {
    if (inRange(number, 1000, 1000000)) {
        return `${(number / 1000).toFixed(fractionDigits)} K`
    } else if (inRange(number, 1000001, 1000000000)) {
        return `${(number / 1000000).toFixed(fractionDigits)} M`
    } else if (inRange(number, 1000000001, Infinity)) {
        return `${(number / 1000000000).toFixed(fractionDigits)} B`
    } else {
        return number
    }
}

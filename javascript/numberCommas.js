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

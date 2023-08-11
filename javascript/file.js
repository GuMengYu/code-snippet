/**
 * file对象转二进制流
 * @param file
 */
export function fileToBuffer(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            resolve(e.target?.result)
        }
        try {
            reader.readAsArrayBuffer(file)
        } catch (e) {
            reject(e)
        }
    })
}

/**
 * file对象转DataURL
 * @param file
 */
export function fileToDataURL(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = (e) => {
            resolve(e.target?.result)
        }
        try {
            reader.readAsDataURL(file)
        } catch (e) {
            reject(e)
        }
    })
}

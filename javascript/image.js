
/**
 * 图片转DataURL
 * @param image
 */
export function imageToDataUrl(image) {
    const canvas = document.createElement('canvas')
    canvas.width = image.width
    canvas.height = image.height
    const ctx = canvas.getContext('2d')
    ctx?.drawImage(image, 0, 0, image.width, image.height)
    return canvas.toDataURL('image/png')
}

/**
 * 从远程获取图片，并转换成DataURL
 * @param url
 */
export function getImageDataUrl(url) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.setAttribute('crossOrigin', 'Anonymous')
        image.onload = () => {
            try {
                resolve(imageToDataUrl(image))
            } catch (e) {
                reject(e)
            }
        }
        image.onerror = reject
        image.src = url
    })
}

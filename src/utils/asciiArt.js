const DEFAULT_CHARS = '  .:-=+*#%@'

export function convertToAscii(imageUrl, { width = 100, maxHeight = 60, chars = DEFAULT_CHARS } = {}) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      const ratio = img.height / img.width
      const w = width
      const h = Math.floor(w * ratio)
      canvas.width = w
      canvas.height = h
      const ctx = canvas.getContext('2d')
      ctx.drawImage(img, 0, 0, w, h)
      const { data } = ctx.getImageData(0, 0, w, h)

      const rows = Math.min(h, maxHeight)
      const step = h / rows
      let result = ''
      for (let y = 0; y < rows; y++) {
        const srcY = Math.floor(y * step)
        for (let x = 0; x < w; x++) {
          const i = (srcY * w + x) * 4
          const brightness = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255
          result += chars[Math.floor(brightness * (chars.length - 1))]
        }
        result += '\n'
      }
      resolve(result)
    }
    img.onerror = () => reject(new Error(`Failed to load image: ${imageUrl}`))
    img.src = imageUrl
  })
}

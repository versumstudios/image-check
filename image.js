var getImageSize = require("image-size-from-url").default

const GetImageDimensions = (type, cid) => {
  return new Promise(async (resolve, reject) => {
    try {
      const before = Date.now()

      const { width, height } = await getImageSize(
        `http://static.tcinfra.net/media/${type}/ipfs/${cid}`
      )

      resolve({
        type,
        cid,
        dimensions: `${width}x${height}`,
        duration: Date.now() - before,
      })
    } catch (error) {
      reject({ type, cid, error })
    }
  })
}

module.exports = GetImageDimensions

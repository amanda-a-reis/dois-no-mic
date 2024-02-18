import { useCallback, useRef } from "react"
import { toPng } from "html-to-image"

const useSaveImg = () => {
  const ref = useRef<HTMLDivElement>(null)

  const savePngImgFromHTML = useCallback(() => {
    if (ref.current === null) {
      return
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        window.location.reload()

        const link = document.createElement("a")
        link.download = "my-image-name.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [ref])

  return {
    ref,
    savePngImgFromHTML
  }
}

export default useSaveImg

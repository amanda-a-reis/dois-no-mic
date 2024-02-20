import { useCallback, useRef } from "react"
import { toPng } from "html-to-image"

const useSaveImg = () => {
  const ref = useRef<HTMLDivElement>(null)

  const savePngImgFromHTML = useCallback(() => {
    if (ref.current === null) {
      return
    }

    const timestamp = Date.now().toString()

    const uniqueNumber = timestamp.slice(-6)

    const fileName = `meus-votos-oscar-2024-${uniqueNumber}.png`

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        window.location.reload()

        const link = document.createElement("a")
        link.download = fileName
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

/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { toPng } from "html-to-image"
import { useCallback, useRef } from "react"

const useSaveImg = () => {
  const ref = useRef<HTMLDivElement>(null)

  const exportAsImage = useCallback(() => {
    if (ref.current === null) {
      return
    }

    const timestamp = Date.now().toString()

    const uniqueNumber = timestamp.slice(-6)

    const fileName = `meus-votos-oscar-2024-${uniqueNumber}.png`

    toPng(ref.current, {
      cacheBust: true
    })
      .then((dataUrl) => {
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
    exportAsImage,
    ref
  }
}

export default useSaveImg

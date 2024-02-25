/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import html2canvas from "html2canvas"
import { useCallback, useRef } from "react"

const useSaveImg = () => {
  const ref = useRef<HTMLDivElement>(null)

  const downloadImg = useCallback((blob) => {
    const timestamp = Date.now().toString()

    const uniqueNumber = timestamp.slice(-6)

    const fileName = `meus-votos-oscar-2024-${uniqueNumber}.png`

    const fakeLink = window.document.createElement("a")
    const fakeLinkStyle = fakeLink.style as CSSStyleDeclaration
    fakeLinkStyle.display = "none"
    fakeLink.download = fileName

    fakeLink.href = blob

    document.body.appendChild(fakeLink)
    fakeLink.click()
    document.body.removeChild(fakeLink)

    fakeLink.remove()
  }, [])

  const exportAsImage = useCallback(async () => {
    if (ref.current === null) {
      return
    }

    const canvas = await html2canvas(ref.current)

    const image = canvas.toDataURL("image/png", 1.0)

    downloadImg(image)
  }, [ref, downloadImg])

  return {
    exportAsImage,
    ref
  }
}

export default useSaveImg

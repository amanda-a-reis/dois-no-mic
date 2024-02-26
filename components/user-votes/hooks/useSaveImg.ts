/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import html2canvas from "html2canvas"
import { useCallback, useRef } from "react"

const useSaveImg = () => {
  const ref = useRef<HTMLDivElement>(null)

  const refFake = useRef<HTMLDivElement>(null)

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
    if (refFake.current === null) {
      return
    }

    const canvas = await html2canvas(refFake.current, {
      backgroundColor: "transparent",
      scale: 1,
      windowHeight: 1600,
      windowWidth: 900,
      width: 900,
      height: 1600
    })

    const img = canvas.toDataURL("image/png", 1.0)

    downloadImg(img)
  }, [refFake, downloadImg])

  return {
    exportAsImage,
    ref,
    refFake
  }
}

export default useSaveImg

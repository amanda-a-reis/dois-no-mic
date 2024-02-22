/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import html2canvas from "html2canvas"

const useSaveImg = () => {
  const exportAsImage = async (element: HTMLDivElement) => {
    const canvas = await html2canvas(element, {
      backgroundColor: null
    })

    console.log("element", element)

    const image = canvas.toDataURL("image/png", 1.0)

    downloadImage(image)
  }

  const downloadImage = (blob) => {
    const timestamp = Date.now().toString()

    const uniqueNumber = timestamp.slice(-6)

    const fileName = `meus-votos-oscar-2024-${uniqueNumber}.png`

    const fakeLink = window.document.createElement("a")
    const fakeLinkStyle = fakeLink.style
    fakeLinkStyle.display = "none"
    fakeLink.download = fileName

    fakeLink.href = blob

    document.body.appendChild(fakeLink)
    fakeLink.click()
    document.body.removeChild(fakeLink)

    fakeLink.remove()
  }

  return {
    exportAsImage
  }
}

export default useSaveImg

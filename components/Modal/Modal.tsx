"use client"

import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"
import CloseModalButton from "../Buttons/CloseModalButton"

const ModalWrapper = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

const ModalWithButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`

const ModalContent = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.theme.color.gray_secondary};
  width: 258px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
`

interface ModalProps {
  onClose: () => void
  children: React.ReactNode
}

export default function Modal(props: ModalProps) {
  const { onClose, children } = props

  const [mounted, setMounted] = useState(false)

  const ref = useRef<any>()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        onClose()
      }
    }
    document.addEventListener("click", checkIfClickedOutside)
    return () => {
      document.removeEventListener("click", checkIfClickedOutside)
    }
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  return (
    <>
      {mounted &&
        createPortal(
          <ModalWrapper>
            <ModalWithButton>
              <ModalContent ref={ref}>{children}</ModalContent>
              <CloseModalButton onClick={onClose} />
            </ModalWithButton>
          </ModalWrapper>,
          document.getElementById("modal-root")
        )}
    </>
  )
}

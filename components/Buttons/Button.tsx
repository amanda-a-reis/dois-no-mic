import { memo } from "react"
import styled from "styled-components"

const ButtonStyled = styled.button`
  width: 323px;
  height: 42px;
  border-radius: 6px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &.bgColor-secondary {
    background-color: #000000;
  }

  &.bgColor-primary {
    background-color: #edce74;
  }
`

const ButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const LabelContainer = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  height: 100%;
  margin: 0%;

  &.fontColor-secondary {
    color: #edce74;
  }

  &.fontColor-primary {
    color: #000000;
  }
`

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  variant?: "primary" | "secondary"
}

const Button = (props: ButtonProps) => {
  const { label, iconLeft, iconRight, variant = "primary", ...rest } = props

  return (
    <ButtonStyled className={`bgColor-${variant}`} {...rest}>
      <ButtonContainer>
        {iconLeft && <IconContainer>{iconLeft}</IconContainer>}
        <LabelContainer className={`fontColor-${variant}`}>
          {label}
        </LabelContainer>
        {iconRight && <IconContainer>{iconRight}</IconContainer>}
      </ButtonContainer>
    </ButtonStyled>
  )
}

export default memo(Button)

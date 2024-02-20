import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"
import Lottie from "react-lottie"
import loadingAnimation from "./loading-lottie.json"

const ButtonStyled = styled.button`
  width: 100%;
  height: 42px;
  border-radius: 6px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  cursor: pointer;

  &.bgColor-secondary {
    background-color: ${(props) => props.theme.color.black};
  }

  &.bgColor-primary {
    background-color: ${(props) => props.theme.color.yellow};
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

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  variant?: "primary" | "secondary"
  isLoading?: boolean
}

const theme = {
  primary: {
    fontColor: TextColors.black
  },
  secondary: {
    fontColor: TextColors.yellow
  }
}

const Button = (props: ButtonProps) => {
  const {
    label,
    iconLeft,
    iconRight,
    variant = "primary",
    isLoading = false,
    ...rest
  } = props

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

  return (
    <ButtonStyled className={`bgColor-${variant}`} {...rest} disabled={isLoading}>
      <ButtonContainer>
        {iconLeft && <IconContainer>{iconLeft}</IconContainer>}
        {!isLoading && (
          <Text color={theme[variant].fontColor} size="small">
            {label}
          </Text>
        )}

        {isLoading && (
          <Lottie options={defaultOptions} height={20} width={20} />
        )}
        {iconRight && <IconContainer>{iconRight}</IconContainer>}
      </ButtonContainer>
    </ButtonStyled>
  )
}

export default memo(Button)

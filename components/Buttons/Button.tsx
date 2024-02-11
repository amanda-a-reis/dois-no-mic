import Text, { TextColors } from "../Typography/Text"

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

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  variant?: "primary" | "secondary"
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
  const { label, iconLeft, iconRight, variant = "primary", ...rest } = props

  return (
    <ButtonStyled className={`bgColor-${variant}`} {...rest}>
      <ButtonContainer>
        {iconLeft && <IconContainer>{iconLeft}</IconContainer>}
        <Text color={theme[variant].fontColor} size="small">
          {label}
        </Text>
        {iconRight && <IconContainer>{iconRight}</IconContainer>}
      </ButtonContainer>
    </ButtonStyled>
  )
}

export default memo(Button)

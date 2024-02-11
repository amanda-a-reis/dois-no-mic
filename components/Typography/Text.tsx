import React, { memo } from "react"
import styled from "styled-components"

const TextStyled = styled.p`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0;

  &.fontColor-yellow {
    color: ${(props) => props.theme.color.yellow};
  }

  &.fontColor-white {
    color: ${(props) => props.theme.color.white};
  }

  &.fontColor-black {
    color: ${(props) => props.theme.color.black};
  }

  &.fontSize-small {
    font-size: 14px;
  }

  &.fontSize-medium {
    font-size: 16px;
  }

  &.fontSize-large {
    font-size: 20px;
  }
`

export enum TextColors {
  yellow = "yellow",
  white = "white",
  black = "black",
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  color?: TextColors
  size?: "small" | "medium" | "large"
}

const Text = (props: TextProps) => {
  const { children, color = TextColors.yellow, size = "medium", ...rest } = props
  return <TextStyled className={`fontColor-${color} fontSize-${size}`} {...rest}>{children}</TextStyled>
}

export default memo(Text)

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

  &.fontSize-xSmall {
    font-size: 8px;
    line-height: 14px;
  }

  &.fontSize-small {
    font-size: 14px;
    line-height: 17px;
  }

  &.fontSize-medium {
    font-size: 16px;
    line-height: 19px;
  }

  &.fontSize-large {
    font-size: 20px;
    line-height: 24px;
  }

  &.fontSize-xLarge {
    font-size: 32px;
    line-height: 44px;
  }

  &.fontWeight-medium {
    font-weight: 500;
  }

  &.fontWeight-regular {
    font-weight: 400;
  }

  &.fontWeight-semiBold {
    font-weight: 600;
  }
`

export enum TextColors {
  yellow = "yellow",
  white = "white",
  black = "black"
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  color?: TextColors
  size?: "xSmall" | "small" | "medium" | "large" | "xLarge"
  weigth?: "medium" | "regular" | "semiBold"
}

const Text = (props: TextProps) => {
  const {
    children,
    color = TextColors.yellow,
    size = "medium",
    weigth = "regular",
    ...rest
  } = props
  return (
    <TextStyled
      className={`fontColor-${color} fontSize-${size} fontWeight-${weigth}`}
      {...rest}
    >
      {children}
    </TextStyled>
  )
}

export default memo(Text)

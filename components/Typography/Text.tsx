import clsx from "clsx"
import React, { memo } from "react"
import styled from "styled-components"

const TextStyled = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap");
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  font-family: "Inter", sans-serif;

  &.fontColor-yellow {
    color: ${(props) => props.theme.color.yellow};
  }

  &.fontColor-white {
    color: ${(props) => props.theme.color.white};
  }

  &.fontColor-black {
    color: ${(props) => props.theme.color.black};
  }

  &.fontSize-img {
    font-size: 10px;
    line-height: 16px;
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

  &.fontSize-xxLarge {
    font-size: 40px;
    line-height: 48px;
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

  &.isPosterTitle {
    @media (min-width: 1025px) {
      font-size: 16px;
      line-height: 19px;
    }
  }
`

export enum TextColors {
  yellow = "yellow",
  white = "white",
  black = "black"
}

export enum TextWeights {
  medium = "medium",
  regular = "regular",
  semiBold = "semiBold"
}

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  color?: TextColors
  size?: "xSmall" | "small" | "medium" | "large" | "xLarge" | "xxLarge" | "img"
  weigth?: "medium" | "regular" | "semiBold"
  isPosterTitle?: boolean
}

const Text = (props: TextProps) => {
  const {
    children,
    color = TextColors.yellow,
    size = "medium",
    weigth = "regular",
    isPosterTitle,
    ...rest
  } = props
  return (
    <TextStyled
      className={clsx(
        `fontColor-${color} fontSize-${size} fontWeight-${weigth}`,
        { isPosterTitle }
      )}
      {...rest}
    >
      {children}
    </TextStyled>
  )
}

export default memo(Text)

import ChevronLeft from "../Icons/ChevronLeft"
import ChevronRight from "../Icons/ChrevronRight"
import { IconColors, IconSizes } from "../Icons/types/IconProps"
import Button, { ButtonProps } from "./Button"

import { memo } from "react"

interface ButtonChevronProps extends ButtonProps {
  direction: "left" | "right"
}

const theme = {
  primary: {
    iconColor: IconColors.black,
    iconSize: IconSizes.small
  },
  secondary: {
    iconColor: IconColors.selected,
    iconSize: IconSizes.default
  }
}

const ButtonChevronIcon = (props: ButtonChevronProps) => {
  const { variant = "primary", label, direction } = props
  return (
    <>
      {direction === "right" && (
        <Button
          variant={variant}
          label={label}
          iconRight={
            <ChevronRight
              size={theme[variant].iconSize}
              color={theme[variant].iconColor}
            />
          }
        />
      )}

      {direction === "left" && (
        <Button
          variant={variant}
          label={label}
          iconLeft={
            <ChevronLeft
              size={theme[variant].iconSize}
              color={theme[variant].iconColor}
            />
          }
        />
      )}
    </>
  )
}

export default memo(ButtonChevronIcon)

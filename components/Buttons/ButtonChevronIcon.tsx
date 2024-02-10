import { memo } from "react"
import ChevronRight from "../Icons/ChrevronRight"
import Button from "./Button"
import ChevronLeft from "../Icons/ChevronLeft"

interface ButtonChevronProps {
  variant?: "primary" | "secondary"
  direction: "left" | "right"
  label: string
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
              size={variant === "primary" ? "small" : ""}
              color={variant === "primary" ? "black" : "selected"}
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
              size={variant === "primary" ? "small" : ""}
              color={variant === "primary" ? "black" : "selected"}
            />
          }
        />
      )}
    </>
  )
}

export default memo(ButtonChevronIcon)

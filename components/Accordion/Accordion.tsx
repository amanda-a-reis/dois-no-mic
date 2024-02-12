import clsx from "clsx"
import Check from "../Icons/Check"
import CheckFill from "../Icons/CheckFill"
import { IconColors } from "../Icons/types/IconProps"
import Text, { TextColors } from "../Typography/Text"

import { memo, useCallback } from "react"
import styled from "styled-components"

const Container = styled.button`
  width: 100%;
  height: 42px;
  background-color: ${(props) => props.theme.color.gray_secondary};
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
  border: none;

  &.hasLightBg {
    background-color: ${(props) => props.theme.color.gray_primary};
  }

  &.hasTransparency {
    background-color: transparent;
  }

  &.isButton {
    cursor: pointer;
  }
`

const InlineContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`

interface AccordionProps {
  label: string
  variant?: "primary" | "secondary"
  hasVoted?: boolean
  hasTransparency?: boolean
  hasLightBg?: boolean
  isButton?: boolean
  handleActiveCategory?: (category: string) => void
}

const theme = {
  primary: {
    fontColor: TextColors.white,
    iconColor: IconColors.default
  },
  secondary: {
    fontColor: TextColors.yellow,
    iconColor: IconColors.selected
  }
}

const Accordion = (props: AccordionProps) => {
  const {
    label,
    variant,
    hasVoted = false,
    hasTransparency = false,
    hasLightBg = false,
    isButton = false,
    handleActiveCategory
  } = props

  const onCategoryClick = useCallback(() => {
    if (!isButton) {
      return
    }
    handleActiveCategory(label)
  }, [isButton, label, handleActiveCategory])

  return (
    <Container
      className={clsx({ hasTransparency, hasLightBg, isButton })}
      onClick={onCategoryClick}
    >
      <InlineContainer>
        <IconContainer>
          {!hasVoted && <Check color={theme[variant].iconColor} />}
          {hasVoted && <CheckFill color={IconColors.selected} />}
        </IconContainer>
        {!hasVoted && <Text color={theme[variant].fontColor}>{label}</Text>}
        {hasVoted && <Text color={TextColors.yellow}>{label}</Text>}
      </InlineContainer>
    </Container>
  )
}

export default memo(Accordion)

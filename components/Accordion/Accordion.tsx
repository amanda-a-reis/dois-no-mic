import clsx from "clsx"
import Check from "../Icons/Check"
import CheckFill from "../Icons/CheckFill"
import { IconColors } from "../Icons/types/IconProps"
import Text, { TextColors } from "../Typography/Text"

import { memo, useCallback, useMemo } from "react"
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
  activeCategory?: string
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
    hasVoted = false,
    hasTransparency = false,
    hasLightBg = false,
    isButton = false,
    activeCategory,
    handleActiveCategory
  } = props

  const onCategoryClick = useCallback(() => {
    if (!isButton) {
      return
    }
    handleActiveCategory(label)
  }, [isButton, label, handleActiveCategory])

  const categoryVariant = useMemo(() => {
    if (activeCategory === label) {
      return "secondary"
    }
    return "primary"
  }, [activeCategory, label])

  return (
    <Container
      className={clsx({ hasTransparency, hasLightBg, isButton })}
      onClick={onCategoryClick}
    >
      <InlineContainer>
        <IconContainer>
          {!hasVoted && <Check color={theme[categoryVariant].iconColor} />}
          {hasVoted && <CheckFill color={IconColors.selected} />}
        </IconContainer>
        <Text color={theme[categoryVariant].fontColor}>{label}</Text>
      </InlineContainer>
    </Container>
  )
}

export default memo(Accordion)

import clsx from "clsx"
import Check from "../Icons/Check"
import CheckFill from "../Icons/CheckFill"
import { IconColors } from "../Icons/types/IconProps"
import Text, { TextColors, TextWeights } from "../Typography/Text"

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
  hasLightBg?: boolean
  hasTransparency?: boolean
  hasVote?: boolean
  isButton?: boolean
  label: string
  variant?: "primary" | "secondary"
  handleActiveCategory?: (category: string) => void
}

const theme = {
  primary: {
    fontColor: TextColors.white,
    fontWeight: TextWeights.regular,
    iconColor: IconColors.default
  },
  secondary: {
    fontColor: TextColors.yellow,
    fontWeight: TextWeights.semiBold,
    iconColor: IconColors.selected
  }
}

const Accordion = (props: AccordionProps) => {
  const {
    hasLightBg = false,
    hasTransparency = false,
    hasVote = false,
    isButton = false,
    label,
    variant,
    handleActiveCategory
  } = props

  const onAccordionClick = useCallback(() => {
    if (!isButton) {
      return
    }
    handleActiveCategory(label)
  }, [isButton, label, handleActiveCategory])

  return (
    <Container
      className={clsx({ hasTransparency, hasLightBg, isButton })}
      onClick={onAccordionClick}
    >
      <InlineContainer>
        <IconContainer>
          {!hasVote && <Check color={theme[variant].iconColor} />}
          {hasVote && <CheckFill color={IconColors.selected} />}
        </IconContainer>
        {!hasVote && (
          <Text
            color={theme[variant].fontColor}
            weigth={theme[variant].fontWeight}
          >
            {label}
          </Text>
        )}
        {hasVote && (
          <Text color={TextColors.yellow} weigth={TextWeights.semiBold}>
            {label}
          </Text>
        )}
      </InlineContainer>
    </Container>
  )
}

export default memo(Accordion)

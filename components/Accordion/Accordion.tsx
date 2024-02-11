import Check from "../Icons/Check"
import CheckFill from "../Icons/CheckFill"
import { IconColors } from "../Icons/types/IconProps"
import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 360px;
  height: 42px;
  background-color: ${(props) => props.theme.color.gray_secondary};
  display: flex;
  align-items: center;
  border-radius: 8px;
  padding: 12px;
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
  const { label, variant = "primary", hasVoted = false } = props

  return (
    <Container>
      <InlineContainer>
        <IconContainer>
          {!hasVoted && <Check color={theme[variant].iconColor} />}
          {hasVoted && <CheckFill color={IconColors.selected} />}
        </IconContainer>
        <Text color={theme[variant].fontColor}>{label}</Text>
      </InlineContainer>
    </Container>
  )
}

export default memo(Accordion)

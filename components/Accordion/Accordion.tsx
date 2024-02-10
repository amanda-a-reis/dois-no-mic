import { memo } from "react"
import styled from "styled-components"
import Check from "../Icons/Check"
import { IconColors } from "../Icons/types/IconProps"
import CheckFill from "../Icons/CheckFill"

const Container = styled.div`
  width: 360px;
  height: 42px;
  background-color: #2f2f2f;
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

const Label = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;

  &.fontColor-secondary {
    color: #edce74;
  }

  &.fontColor-primary {
    color: #ffffff;
  }
`

interface AccordionProps {
  label: string
  variant?: "primary" | "secondary"
  hasVoted?: boolean
}

const Accordion = (props: AccordionProps) => {
  const { label, variant = "primary", hasVoted = false } = props

  return (
    <Container>
      <InlineContainer>
        <IconContainer>
          {!hasVoted && (
            <Check
              color={
                variant === "secondary"
                  ? IconColors.selected
                  : IconColors.default
              }
            />
          )}
          {hasVoted && <CheckFill color={IconColors.selected} />}
        </IconContainer>
        <Label className={`fontColor-${variant}`}>{label}</Label>
      </InlineContainer>
    </Container>
  )
}

export default memo(Accordion)

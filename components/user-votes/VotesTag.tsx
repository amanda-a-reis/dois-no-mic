import clsx from "clsx"
import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  &.fullWidth {
    display: grid;
    align-items: start;
    gap: 16px;
    grid-template-columns: auto 150%;
  }
`

interface VotesTagProps {
  category: string
  selectedMovie: string
  categoryColor: TextColors
  fullWidth: boolean
}

const VotesTag = (props: VotesTagProps) => {
  const {
    category,
    selectedMovie,
    categoryColor = TextColors.white,
    fullWidth = false
  } = props

  return (
    <VoteContainer className={clsx({ fullWidth })}>
      {fullWidth && (
        <>
          <Text size="medium" weigth="semiBold" color={categoryColor}>
            {category}
          </Text>
          <Text size="medium" weigth="semiBold" color={TextColors.yellow}>
            {selectedMovie.toUpperCase().split(" - ")[0]}
          </Text>
        </>
      )}

      {!fullWidth && (
        <>
          <Text size="xSmall" weigth="semiBold" color={categoryColor}>
            {category}
          </Text>
          <Text size="xSmall" weigth="semiBold" color={TextColors.yellow}>
            {selectedMovie.toUpperCase().split(" - ")[0]}
          </Text>
        </>
      )}
    </VoteContainer>
  )
}

export default memo(VotesTag)

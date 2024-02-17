import HeartFill from "../Icons/HeartFill"
import { IconColors, IconSizes } from "../Icons/types/IconProps"
import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"

const VoteContainer = styled.div`
  display: grid;
  grid-template-columns: 6fr auto 5fr;
  align-items: start;
  gap: 8px;
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 11px;
`

interface VotesTagProps {
  category: string
  selectedMovie: string
  categoryColor: TextColors
}

const VotesTag = (props: VotesTagProps) => {
  const { category, selectedMovie, categoryColor = TextColors.white } = props

  return (
    <VoteContainer>
      <Text size="xSmall" weigth="semiBold" color={categoryColor}>
        {category.toUpperCase()}
      </Text>
      <IconContainer>
        <HeartFill size={IconSizes.small} color={IconColors.selected} />
      </IconContainer>
      <Text size="xSmall" weigth="semiBold" color={TextColors.yellow}>
        {selectedMovie.toUpperCase().split(" - ")[0]}
      </Text>
    </VoteContainer>
  )
}

export default memo(VotesTag)

import clsx from "clsx"
import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"

const VoteContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 374px;
  height: 96px;
  gap: 8px;

  &.fullWidth {
    width: 100%;
    height: 100%;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }
`

const TextContainer = styled.div`
  width: 100%;
`

const BestMovieContainer = styled.div`
  width: 175px;
`

interface VotesTagProps {
  category: string
  selectedMovie: string
  categoryColor: TextColors
  fullWidth: boolean
}

const VotesTagImg = (props: VotesTagProps) => {
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
          <BestMovieContainer>
            <Text size="mediumImage" weigth="semiBold" color={categoryColor}>
              {category}
            </Text>
          </BestMovieContainer>
          <TextContainer>
            <Text
              size="mediumImage"
              weigth="semiBold"
              color={TextColors.yellow}
            >
              {selectedMovie.toUpperCase().split(" - ")[0]}
            </Text>
          </TextContainer>
        </>
      )}

      {!fullWidth && (
        <>
          <TextContainer>
            <Text size="smallImage" weigth="semiBold" color={categoryColor}>
              {category}
            </Text>
          </TextContainer>

          <TextContainer>
            <Text size="smallImage" weigth="semiBold" color={TextColors.yellow}>
              {selectedMovie.toUpperCase().split(" - ")[0]}
            </Text>
          </TextContainer>
        </>
      )}
    </VoteContainer>
  )
}

export default memo(VotesTagImg)

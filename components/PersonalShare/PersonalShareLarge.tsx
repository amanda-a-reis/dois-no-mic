import styled from "styled-components"
import Text, { TextColors } from "../Typography/Text"
import VotesTagLarge from "../user-votes/VotesTagLarge"
import DoisNoMicLogoAlter from "../Icons/DoisNoMicLogoAlter"

const CardContentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-bottom: 8px;
  background-color: ${(props) => props.theme.color.gray_primary};
`

const CardDescriptionContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.yellow};
  padding: 16px;
  justify-content: space-between;
`

const DescriptionTextContainer = styled.div`
  width: 50%;
`

const IconContainer = styled.div`
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  padding: 8px;
`

const VotesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 12px;
`

const BestMovieContainer = styled.div`
  width: calc(50% - 6px);
`

interface PersonalShareProps {
  bestMovie: any
  userVotesList: any[]
  hasVotes: boolean
  moviePoster: any
}

const PersonalShareLarge = (props: PersonalShareProps) => {
  const { bestMovie, userVotesList, hasVotes } = props
  return (
    <CardContentContainer >
      <CardDescriptionContainer>
        <DescriptionTextContainer>
          <Text size="large" color={TextColors.black}>
            Meus favoritos para o Oscar® 2025
          </Text>
        </DescriptionTextContainer>
        <IconContainer>
          <DoisNoMicLogoAlter />
        </IconContainer>
      </CardDescriptionContainer>
      {hasVotes && (
        <MoviesContainer>
          {bestMovie?.selectedMovie && (
            <BestMovieContainer>
              <VotesTagLarge {...bestMovie} fullWidth />
            </BestMovieContainer>
          )}
          <VotesContainer>
            {userVotesList?.map((vote) => (
              <>{vote.selectedMovie && <VotesTagLarge {...vote} />}</>
            ))}
          </VotesContainer>
        </MoviesContainer>
      )}
    </CardContentContainer>
  )
}

export default PersonalShareLarge

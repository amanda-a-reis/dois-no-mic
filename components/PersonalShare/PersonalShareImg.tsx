import styled from "styled-components"
import DoisNoMicLarge from "../Icons/DoisNoMicLarge"
import Text, { TextColors } from "../Typography/Text"
import VotesTagImg from "../user-votes/VotesTagImg"

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
  padding: 37px 0px 37px 36px;
  gap: 84px;
`

const DescriptionTextContainer = styled.div`
  width: 563px;
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
  gap: 38px;
  padding: 36px;
`

const VotesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 24px 0px;
`

const BestMovieContainer = styled.div`
  width: 100%;
`

interface PersonalShareProps {
  bestMovie: any
  userVotesList: any[]
  hasVotes: boolean
  moviePoster: any
}

const PersonalShareImg = (props: PersonalShareProps) => {
  const { bestMovie, userVotesList, hasVotes } = props
  return (
    <CardContentContainer>
      <CardDescriptionContainer>
        <DescriptionTextContainer>
          <Text size="largeImage" color={TextColors.black} weigth="medium">
            Meus favoritos para o Oscar® 2025
          </Text>
        </DescriptionTextContainer>
        <IconContainer>
          <DoisNoMicLarge />
        </IconContainer>
      </CardDescriptionContainer>
      {hasVotes && (
        <MoviesContainer>
          {bestMovie?.selectedMovie && (
            <BestMovieContainer>
              <VotesTagImg {...bestMovie} fullWidth />
            </BestMovieContainer>
          )}
          <VotesContainer>
            {userVotesList?.map((vote) => (
              <>{vote.selectedMovie && <VotesTagImg {...vote} />}</>
            ))}
          </VotesContainer>
        </MoviesContainer>
      )}
    </CardContentContainer>
  )
}

export default PersonalShareImg

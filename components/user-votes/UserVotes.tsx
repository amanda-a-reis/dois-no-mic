"use client"

import Button from "../Buttons/Button"
import Header from "../Header/Header"
import Text, { TextColors } from "../Typography/Text"
import VotesTag from "./VotesTag"

import { bestMoviePoster } from "../../movies/oscar_2024"
import useStorageVotes from "../votes-page/hooks/useStorageVotes"
import useSaveImg from "./hooks/useSaveImg"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo, useRef } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.gray_bg};
  align-items: center;
  padding: 8px;
  gap: 8px;
`

const HeaderContainer = styled.div`
  width: 100%;
  z-index: 10;
`

const CardContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;
`

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Img = styled(Image)`
  object-fit: cover;
  object-position: center;

  border-radius: 8px;

  /* @media (max-width: 345px) {
    object-position: center;
  } */
`

const CardContentContainer = styled.div`
  width: 100%;
  z-index: 10;
  position: absolute;
  bottom: 0;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardDescriptionContainer = styled.div`
  width: 50%;
  background-color: ${(props) => props.theme.color.yellow};
  padding: 8px;
`

const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
  background-color: ${(props) => props.theme.color.gray_secondary};
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

const ButtonsCard = styled.div`
  background-color: rgba(63, 63, 63, 0.74);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 16px;
`

const ButtonsContainer = styled.div`
  width: 100%;
`

const bestMovieCategoryLabel = "Melhor Filme"

const UserVotes = () => {
  const { storageVotes, getStorageVotes, saveInitialVotes } = useStorageVotes()

  const router = useRouter()

  const ref = useRef(null)

  const { exportAsImage } = useSaveImg()

  const movieInfo = useMemo(() => {
    const bestMovie = storageVotes.find(
      (vote) => vote.category === bestMovieCategoryLabel
    )

    const posterKey =
      bestMovie?.selectedMovie?.replace(/ /g, "_").toLowerCase() || "default"

    return {
      bestMovie,
      userVotesList: storageVotes.filter(
        (vote) => vote.category !== bestMovieCategoryLabel
      ),
      hasVotes: storageVotes.some((vote) => vote.selectedMovie),
      moviePoster: bestMoviePoster[posterKey]
    }
  }, [storageVotes])

  const handleVoteAgain = useCallback(() => {
    saveInitialVotes()

    router.replace("/votes")
  }, [router, saveInitialVotes])

  useEffect(() => {
    getStorageVotes()
  }, [])

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <CardContainer ref={ref}>
        <ImgContainer>
          <Img
            src={movieInfo.moviePoster?.src}
            alt={movieInfo.moviePoster?.alt}
            priority
            fill
          />
        </ImgContainer>
        <CardContentContainer>
          <CardDescriptionContainer>
            <Text size="large" color={TextColors.black}>
              Meus favoritos para o Oscar® 2024
            </Text>
          </CardDescriptionContainer>
          {movieInfo.hasVotes && (
            <MoviesContainer>
              {movieInfo.bestMovie?.selectedMovie && (
                <BestMovieContainer>
                  <VotesTag
                    {...movieInfo.bestMovie}
                    categoryColor={TextColors.yellow}
                    fullWidth
                  />
                </BestMovieContainer>
              )}
              <VotesContainer>
                {movieInfo.userVotesList?.map((vote) => (
                  <>{vote.selectedMovie && <VotesTag {...vote} />}</>
                ))}
              </VotesContainer>
            </MoviesContainer>
          )}
        </CardContentContainer>
      </CardContainer>

      <ButtonsContainer>
        <ButtonsCard>
          <Button
            label="Salvar imagem"
            onClick={async () => {
              await exportAsImage(ref.current, "oscar_2024.png")
            }}
          />
          <Button
            label="Votar novamente"
            variant="secondary"
            onClick={handleVoteAgain}
          />
        </ButtonsCard>
      </ButtonsContainer>
    </Container>
  )
}

export default UserVotes

"use client"

import Button from "../Buttons/Button"
import Header from "../Header/Header"

import { bestMoviePoster } from "../../movies/oscar_2024"
import useStorageVotes from "../votes-page/hooks/useStorageVotes"
import useSaveImg from "./hooks/useSaveImg"

import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo, useRef } from "react"
import styled from "styled-components"
import PersonalShare from "../PersonalShare/PersonalShare"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.gray_bg};
  align-items: center;
  padding: 8px;
  gap: 8px;
`

const HeaderContainer = styled.div`
  width: 100%;
`

const CardContainer = styled.div`
  width: 100%;
  min-height: 424px;
`

const ButtonsCard = styled.div`
  width: 100%;
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
  padding: 8px;
  position: fixed;
  bottom: 0;
`

const bestMovieCategoryLabel = "Melhor Filme"

const UserVotes = () => {
  const { storageVotes, getStorageVotes, saveInitialVotes } = useStorageVotes()

  const router = useRouter()

  const { exportAsImage, ref } = useSaveImg()

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
        <PersonalShare {...movieInfo} />
      </CardContainer>

      <ButtonsContainer>
        <ButtonsCard>
          <Button
            label="Salvar imagem"
            onClick={exportAsImage}
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

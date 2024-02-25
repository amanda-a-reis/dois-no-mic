"use client"

import Button from "../Buttons/Button"
import Header from "../Header/Header"

import { bestMoviePoster } from "../../movies/oscar_2024"
import useStorageVotes from "../votes-page/hooks/useStorageVotes"
import useSaveImg from "./hooks/useSaveImg"

import { useRouter } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import PersonalShare from "../PersonalShare/PersonalShare"
import PersonalShareBannerLarge from "../Banner/PersonalShareBannerLarge"
import PersonalShareLarge from "../PersonalShare/PersonalShareLarge"
import PersonalShareImg from "../PersonalShare/PersonalShareImg"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.color.gray_bg};
  align-items: center;
  padding: 8px;
  gap: 8px;

  @media (min-width: 1024px) {
    padding: 18px 16px;
  }
`

const HeaderContainer = styled.div`
  width: 100%;
`

const CardContainer = styled.div`
  width: 100%;
  min-height: 424px;
`

const ContainerLarge = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 48px;
  padding: 48px 72px;

  @media (max-height: 800px) {
    padding: 16px 72px;
  }
`

const CardContainerLarge = styled.div`
  width: 39%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background-color: ${(props) => props.theme.color.gray_primary};
  border-radius: 8px;

  @media (max-height: 900px) {
    width: 70%;
  }
`

const ImgLarge = styled.div`
  width: 100%;
  height: 100%;
`
const ImgLargeFake = styled.div`
  width: 900px;
  height: 1600px;
  z-index: -100;
  position: absolute;
  right: 0;
  bottom: 0;
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
  const [mount, setMount] = useState(false)

  const { storageVotes, getStorageVotes, saveInitialVotes } = useStorageVotes()

  const router = useRouter()

  const { exportAsImage, refFake } = useSaveImg()

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
    setMount(true)
  }, [])

  const isLargeWindow = useMemo(() => {
    return mount && window.innerWidth > 1024
  }, [mount])

  return (
    <Container>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <ImgLargeFake ref={refFake}>
        <PersonalShareImg {...movieInfo} />
      </ImgLargeFake>

      {!isLargeWindow && (
        <>
          <CardContainer>
            <PersonalShare {...movieInfo} />
          </CardContainer>

          <ButtonsContainer>
            <ButtonsCard>
              <Button label="Salvar imagem" onClick={exportAsImage} />
              <Button
                label="Votar novamente"
                variant="secondary"
                onClick={handleVoteAgain}
              />
            </ButtonsCard>
          </ButtonsContainer>
        </>
      )}

      {isLargeWindow && (
        <ContainerLarge>
          <PersonalShareBannerLarge onVote={handleVoteAgain} />
          <CardContainerLarge>
            <ImgLarge>
              <PersonalShareLarge {...movieInfo} />
            </ImgLarge>

            <Button
              label="Salvar imagem"
              variant="primary"
              onClick={exportAsImage}
            />
          </CardContainerLarge>
        </ContainerLarge>
      )}
    </Container>
  )
}

export default UserVotes

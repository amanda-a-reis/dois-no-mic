import Link from "next/link"
import Banner from "../components/Banner/Banner"
import Button from "../components/Buttons/Button"
import Header from "../components/Header/Header"
import useStorageVotes from "../components/votes-page/hooks/useStorageVotes"

import Image from "next/image"
import { useEffect } from "react"
import styled from "styled-components"

const Img = styled(Image)`
  object-fit: cover;
  object-position: right top;

  z-index: 0;
  position: fixed !important;

  @media (max-width: 345px) {
    object-position: center;
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  @media (max-width: 1023px) {
    align-items: flex-end;
    min-height: calc(100vh - 60px);
    justify-content: space-between;
  }
`

const HeaderContainer = styled.div`
  width: 100%;
  z-index: 1;
  padding: 8px 8px 0 8px;

  @media (min-width: 1023px) {
    padding: 16px 16px 0 16px;
  }
`

const BannerContainer = styled.div`
  width: 100%;
  z-index: 1;
  padding: 0px 8px 0px 8px;

  @media (min-width: 1023px) {
    padding: 0px 16px 0px 0px;
    box-sizing: content-box;
    margin-left: auto;
    width: 360px; 
    height: calc(100vh - 186px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
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

  @media (min-width: 1023px) {
    width: 360px;
    position: fixed;
    bottom: 20px;
    right: 16px;
    transform: translateZ(0);
    padding: 16px;
  }
`

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
  z-index: 1;

  @media (min-width: 1023px) {
    padding: 0 16px 16px 0;
  }
`

const LinkStyled = styled(Link)`
  width: 100%;

  @media (min-width: 1023px) {
    &:nth-child(2) {
      display: none;
    }
  }
`

export default function Home() {
  const { verifyStorageVotes, saveInitialVotes } = useStorageVotes()

  useEffect(() => {
    const { hasStorageVotes } = verifyStorageVotes()

    if (!hasStorageVotes) {
      saveInitialVotes()
    }
  }, [saveInitialVotes, verifyStorageVotes])
  return (
    <Container>
      <Img src="/bg-home.webp" alt="background image" fill priority />
      <HeaderContainer>
        <Header hasTransparency />
      </HeaderContainer>
        <BannerContainer>
          <Banner />
        </BannerContainer>
        <ButtonsContainer>
          <ButtonsCard>
            <LinkStyled href="/votes">
              <Button label="Iniciar votação" />
            </LinkStyled>
            <LinkStyled href="/votes?q=allCategories">
              <Button label="Todas as categorias" variant="secondary" />
            </LinkStyled>
          </ButtonsCard>
        </ButtonsContainer>
    </Container>
  )
}

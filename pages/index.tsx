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

  z-index: -1;
  position: fixed !important;

  @media (max-width: 345px) {
    object-position: center;
  }
`

const Container = styled.div`
  width: 100vw;
  min-height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1023px) {
    align-items: flex-end;
    padding: 0 20px;
  }
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 8px;
`

const BannerContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
  box-sizing: content-box;

  @media (min-width: 1023px) {
    margin-left: auto;
    width: 330px; 
    height: calc(90vh - 120px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-top: -40px;
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
    width: 330px;
    position: fixed;
    bottom: 20px;
    right: 9px;
    transform: translateZ(0);
    padding: 24px;
  }
`

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
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
  const { verifyStorageVotes, saveInitialVotes, resetStorageVotes } = useStorageVotes()

  useEffect(() => {
    resetStorageVotes()
    const { hasStorageVotes } = verifyStorageVotes()

    if (hasStorageVotes) return

    saveInitialVotes()
  }, [saveInitialVotes, verifyStorageVotes, resetStorageVotes])
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

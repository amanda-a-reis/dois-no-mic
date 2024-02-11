import Banner from "../components/Banner/Banner"
import Button from "../components/Buttons/Button"
import Header from "../components/Header/Header"

import Image from "next/image"
import styled from "styled-components"

const Img = styled(Image)`
  object-fit: cover;
  object-position: right top;

  z-index: -1;
  position: fixed;

  min-height: 100%;

  @media (max-width: 345px) {
    object-position: center;
  }

  @media (max-height: 638px) {
    min-height: calc(100% + 10%);
  }

  @media (max-height: 583px) {
    min-height: calc(100% + 25%);
  }
`

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 8px;
`

const BannerContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
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
  padding: 0 8px 8px 8px;
`

export default function Home() {
  return (
    <Container>
      <Img src="/bg-home.jpg" alt="background image" fill priority />
      <HeaderContainer>
        <Header hasTransparency />
      </HeaderContainer>
      <BannerContainer>
        <Banner />
      </BannerContainer>
      <ButtonsContainer>
        <ButtonsCard>
          <Button label="Iniciar votação" />
          <Button label="Todas as categorias" variant="secondary" />
        </ButtonsCard>
      </ButtonsContainer>
    </Container>
  )
}

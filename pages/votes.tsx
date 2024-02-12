import Accordion from "../components/Accordion/Accordion"
import Button from "../components/Buttons/Button"
import Dropdown from "../components/Dropdown/Dropdown"
import DropdownHeader from "../components/Dropdown/DropdownHeader"
import Header from "../components/Header/Header"
import Poster from "../components/Poster/Poster"

import { useCallback, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.gray_bg};
`

const FixedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0;
  gap: 8px;
  background-color: ${(props) => props.theme.color.gray_bg};
  position: fixed;
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 8px;
`

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.color.gray_bg};
`

const DropdownContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;

  &.isDropdownOpen {
    padding-top: 134px;
  }
`

const AccordionContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
`

const ButtonsCard = styled.div`
  background-color: ${(props) => props.theme.color.gray_primary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const PostersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 100px;
  padding-top: 200px;
`

export default function Votes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  return (
    <Container>
      <FixedContainer>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <DropdownContainer>
          <DropdownHeader isOpen={isDropdownOpen} handleToggle={handleToggle} />
        </DropdownContainer>
        {!isDropdownOpen && (
          <AccordionContainer>
            <Accordion
              label="Melhor filme"
              variant="secondary"
              hasTransparency
            />
          </AccordionContainer>
        )}
      </FixedContainer>
      {isDropdownOpen && (
        <DropdownContainer className="isDropdownOpen">
            <Dropdown isOpen={isDropdownOpen} />
        </DropdownContainer>
      )}
      {!isDropdownOpen && (
        <>
          <PostersContainer>
            <Poster
              movieTile="Top Gun"
              moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
              variant="selected"
            />
            <Poster
              movieTile="Top Gun"
              moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
              variant="default"
            />
            <Poster
              movieTile="Top Gun"
              moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
              variant="default"
            />
            <Poster
              movieTile="Top Gun"
              moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
              variant="default"
            />
            <Poster
              movieTile="Top Gun"
              moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
              variant="default"
            />
            <Poster
              movieTile="Top Gun"
              moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
              variant="default"
            />
          </PostersContainer>
          <ButtonsContainer>
            <ButtonsCard>
              <Button label="Próxima categoria" />
            </ButtonsCard>
          </ButtonsContainer>
        </>
      )}
    </Container>
  )
}

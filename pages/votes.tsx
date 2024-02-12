import Accordion from "../components/Accordion/Accordion"
import Button from "../components/Buttons/Button"
import Dropdown from "../components/Dropdown/Dropdown"
import DropdownHeader from "../components/Dropdown/DropdownHeader"
import Header from "../components/Header/Header"
import PosterList from "../components/Poster/PosterList"

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

const movieList = [
  {
    movieTitle: "Top Gun",
    moviePoster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
  },
  {
    movieTitle: "Top Gun 1",
    moviePoster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
  },
  {
    movieTitle: "Top Gun 2",
    moviePoster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
  },
  {
    movieTitle: "Top Gun 3",
    moviePoster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
  },
  {
    movieTitle: "Top Gun 4",
    moviePoster:
      "https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
  }
]

export default function Votes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState<string | null>(null)

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  const handleSelectMovie = useCallback((movieTile: string) => {
    setMovieSelected(movieTile)
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
              hasVoted={!!movieSelected}
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
          <PosterList
            list={movieList}
            movieSelected={movieSelected}
            handleSelectMovie={handleSelectMovie}
          />
          <ButtonsContainer>
            <ButtonsCard>
              <Button
                label="Próxima categoria"
                onClick={() => {
                  alert(movieSelected)
                }}
              />
            </ButtonsCard>
          </ButtonsContainer>
        </>
      )}
    </Container>
  )
}

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
    movieTitle: "Openheimer",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/c0DCmfC7Et2K3URnIJ4ahJpeXR2.jpg"
  },

  {
    movieTitle: "Barbie",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
  },

  {
    movieTitle: "American Fiction",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/bndwT7YCJv9nEHGSXuzvx9PJ013.jpg"
  },

  {
    movieTitle: "Zona de Interesse",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/7cvX39QbSykkK4aYx4MQhQpXRdc.jpg"
  },

  {
    movieTitle: "Os Rejeitados",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/nuljFk9VbHR8JPPl2uNbu9aMlqg.jpg"
  },

  {
    movieTitle: "Pobres Criaturas",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/kTbBzzdVICzzbv9iFaX0aadvjg0.jpg"
  },

  {
    movieTitle: "Vidas Passadas",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/toSI71gFF11VnLfz2uiNx6jjNUF.jpg"
  },

  {
    movieTitle: "Anatomia de uma Queda",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/woXYl0DJTx6TsfYWPkSfNHTsoOx.jpg"
  },

  {
    movieTitle: "Maestro",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/kxj7rMco6RNYsVcNwuGAIlfWu64.jpg"
  },

  {
    movieTitle: "Assassinos da Lua das Flores",
    moviePoster:
      "https://image.tmdb.org/t/p/w500/sz0HswdqLa6I5ialoyBvn5gm0r5.jpg"
  }
]

export default function Votes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [movieSelected, setMovieSelected] = useState<string | null>(null)
  const [categoryActive, setCategoryActive] = useState("Melhor Filme")

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  const handleSelectMovie = useCallback((movieTitle: string) => {
    setMovieSelected(movieTitle)
  }, [])

  const handleActiveCategory = useCallback((category: string) => {
    setCategoryActive(category)
    setIsDropdownOpen(false)
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
              label={categoryActive}
              activeCategory={categoryActive}
              hasTransparency
              hasVoted={!!movieSelected}
            />
          </AccordionContainer>
        )}
      </FixedContainer>
      {isDropdownOpen && (
        <DropdownContainer className="isDropdownOpen">
          <Dropdown
            isOpen={isDropdownOpen}
            handleActiveCategory={handleActiveCategory}
            activeCategory={categoryActive}
          />
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

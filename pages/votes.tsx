import Accordion from "../components/Accordion/Accordion"
import Button from "../components/Buttons/Button"
import Dropdown from "../components/Dropdown/Dropdown"
import DropdownHeader from "../components/Dropdown/DropdownHeader"
import Header from "../components/Header/Header"
import PosterList from "../components/Poster/PosterList"
import { data, categoryData } from "../movies/data"

import { useCallback, useMemo, useState } from "react"
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

export default function Votes() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const [movieData, setMovieData] = useState<any>(data)

  const [categoryActive, setCategoryActive] = useState(categoryData[0].label)
  const [category, setCategoryData] = useState(categoryData)

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  const categoryActiveId = useMemo(() => {
    return category.findIndex((x: any) => x.label === categoryActive)
  }, [categoryActive, category])

  const handleSelectMovie = useCallback(
    (movieTitle: string) => {
      setMovieData((prevState: any) => {
        const newState = [...prevState]
        newState[categoryActiveId].selectedMovie = movieTitle
        return newState
      })
      setCategoryData((prevState: any) => {
        const newState = [...prevState]
        newState[categoryActiveId].hasVote = true
        return newState
      })
    },
    [categoryActiveId]
  )

  const handleActiveCategory = useCallback((category: string) => {
    setCategoryActive(category)
    setCategoryData((prevState: any) => {
      const newState = [...prevState]
      newState.forEach((x: any) => {
        x.isActive = x.label === category
      })
      return newState
    })
    setIsDropdownOpen(false)
  }, [])

  const selectedMovie = useMemo(() => {
    return movieData[categoryActiveId].selectedMovie
  }, [categoryActiveId, movieData])

  const movieList = useMemo(() => {
    return movieData[categoryActiveId].list
  }, [categoryActiveId, movieData])

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
              variant={categoryActive ? "secondary" : "primary"}
              hasTransparency
              hasVoted={!!selectedMovie}
            />
          </AccordionContainer>
        )}
      </FixedContainer>
      {isDropdownOpen && (
        <DropdownContainer className="isDropdownOpen">
          <Dropdown
            isOpen={isDropdownOpen}
            handleActiveCategory={handleActiveCategory}
            categoryList={category}
          />
        </DropdownContainer>
      )}
      {!isDropdownOpen && (
        <>
          <PosterList
            list={movieList}
            movieSelected={selectedMovie}
            handleSelectMovie={handleSelectMovie}
          />
          <ButtonsContainer>
            <ButtonsCard>
              <Button
                label="Próxima categoria"
                onClick={() => {
                  alert(selectedMovie)
                }}
              />
            </ButtonsCard>
          </ButtonsContainer>
        </>
      )}
    </Container>
  )
}

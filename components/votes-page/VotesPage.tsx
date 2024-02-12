import Accordion from "../Accordion/Accordion"
import Button from "../Buttons/Button"
import Dropdown from "../Dropdown/Dropdown"
import DropdownHeader from "../Dropdown/DropdownHeader"
import Header from "../Header/Header"
import PosterList from "../Poster/PosterList"
import useVotes from "./hooks/useVotes"

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

export default function VotesPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  const {
    data: { activeCategoryLabel, selectedMovie, movieList, categoryList },
    handleSelectMovie,
    handleActiveCategory,
    handleNextCategory
  } = useVotes()

  const handleDropdownClick = useCallback(
    (categoryLabel: string) => {
      handleActiveCategory(categoryLabel)
      setIsDropdownOpen(false)
    },
    [handleActiveCategory]
  )

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
              label={activeCategoryLabel}
              variant="secondary"
              hasTransparency
              hasVote={!!selectedMovie}
            />
          </AccordionContainer>
        )}
      </FixedContainer>
      {isDropdownOpen && (
        <DropdownContainer className="isDropdownOpen">
          <Dropdown
            isOpen={isDropdownOpen}
            handleClick={handleDropdownClick}
            categoryList={categoryList}
          />
        </DropdownContainer>
      )}
      {!isDropdownOpen && (
        <>
          <PosterList
            list={movieList}
            selectedMovie={selectedMovie}
            handleSelectMovie={handleSelectMovie}
          />
          <ButtonsContainer>
            <ButtonsCard>
              <Button label="Próxima categoria" onClick={handleNextCategory} />
            </ButtonsCard>
          </ButtonsContainer>
        </>
      )}
    </Container>
  )
}

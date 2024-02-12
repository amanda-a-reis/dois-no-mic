import Accordion from "../components/Accordion/Accordion"
import Button from "../components/Buttons/Button"
import Dropdown from "../components/Dropdown/Dropdown"
import DropdownHeader from "../components/Dropdown/DropdownHeader"
import Header from "../components/Header/Header"
import PosterList from "../components/Poster/PosterList"
import { votesData, categoryData, IVote, ICategory } from "../movies/data"

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

  const [votes, setVotes] = useState<IVote[]>(votesData)

  const [activeCategoryId, setActiveCategory] = useState(0)
  const [categories, setCategory] = useState<ICategory[]>(categoryData)

  const moviesInfo = useMemo(() => {
    return {
      list: votes[activeCategoryId].list,
      selectedMovie: votes[activeCategoryId].selectedMovie
    }
  }, [activeCategoryId, votes])

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  const handleSelectMovie = useCallback(
    (movieTitle: string) => {
      setVotes((prevState: any) => {
        const newState = [...prevState]
        newState[activeCategoryId].selectedMovie = movieTitle
        return newState
      })
      setCategory((prevState: any) => {
        const newState = [...prevState]
        newState[activeCategoryId].hasVote = true
        return newState
      })
    },
    [activeCategoryId]
  )

  const handleActiveCategory = useCallback(
    (category: string) => {
      const index = categories.findIndex((ctgr) => ctgr.label === category)
      setActiveCategory(index)
      setCategory((prevState) => {
        const newState = [...prevState]
        newState.forEach((x) => {
          x.isActive = x.label === category
        })
        return newState
      })
      setIsDropdownOpen(false)
    },
    [categories]
  )

  const handleNextCategory = useCallback(() => {
    if (activeCategoryId === categories.length - 1) {
      return
    }
    const nextCategory = activeCategoryId + 1
    setActiveCategory(nextCategory)
    setCategory((prevState) => {
      const newState = [...prevState]
      newState.forEach((x, index: number) => {
        x.isActive = index === nextCategory
      })
      return newState
    })
  }, [activeCategoryId, categories])

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
              label={categories[activeCategoryId].label}
              variant="secondary"
              hasTransparency
              hasVote={!!moviesInfo.selectedMovie}
            />
          </AccordionContainer>
        )}
      </FixedContainer>
      {isDropdownOpen && (
        <DropdownContainer className="isDropdownOpen">
          <Dropdown
            isOpen={isDropdownOpen}
            handleActiveCategory={handleActiveCategory}
            categoryList={categories}
          />
        </DropdownContainer>
      )}
      {!isDropdownOpen && (
        <>
          <PosterList
            list={moviesInfo.list}
            movieSelected={moviesInfo.selectedMovie}
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

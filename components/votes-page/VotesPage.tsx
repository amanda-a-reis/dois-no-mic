import Accordion from "../Accordion/Accordion"
import Button from "../Buttons/Button"
import Dropdown from "../Dropdown/Dropdown"
import DropdownHeader from "../Dropdown/DropdownHeader"
import Header from "../Header/Header"
import PosterList from "../Poster/PosterList"
import useVotes from "./hooks/useVotes"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import Modal from "../Modal/Modal"
import Text, { TextColors } from "../Typography/Text"
import Image from "next/image"

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
  z-index: 10;
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 8px;

  @media (min-width: 1023px) {
    padding: 18px 16px 8px 16px;

  }
`

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.color.gray_bg};

  @media (min-width: 1023px) {
    padding-bottom: 18px;
    padding-right: 16px;
  }
`

const DropdownContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;

  &.isDropdownOpen {
    padding-top: 134px;
  }

  @media (min-width: 1023px) {
    position: fixed;
    right: 0;
    width: 360px;
    overflow-y: scroll;
    padding-right: 16px;
    padding-bottom: 8px;

    &.isDropdownOpen {
      padding-top: 86px;

    @media (min-height: 400px) { 
      max-height: 81%; 
        @media (min-height: 600px) {
          max-height: 85%;
          @media (min-height: 800px) {
            max-height: 89%;
            @media (min-height: 1000px) {
              max-height: 92%;
              @media (min-height: 1200px) {
                max-height: 95%;
              }
            }
          }
        }
      }
    }
  }
`

const AccordionContainer = styled.div`
  width: 100%;
  padding: 0 8px 8px 8px;

  @media (min-width: 1023px) {
    display: none;
  }
`

const ButtonsCard = styled.div`
  background-color: ${(props) => props.theme.color.gray_primary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;

  @media (min-width: 1023px) {
    flex-direction: row;
    padding: 12px;
    gap: 8px;
  }
`

const MovieImage = styled(Image)`
  border-radius: 8px;
  width: 150px;
  height: 225px;
`

const MovieTitleContainer = styled.div`
  margin-bottom: 12px;
  text-align: center;
`

export default function VotesPage() {
  const [isOpen, setIsDropdownOpen] = useState(false)

  const [isModalOpen, setIsOpen] = useState(false)

  const [activeMovie, setActiveMovie] = useState("")

  const closeModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const handleToggle = useCallback(() => {
    setIsDropdownOpen((prevState) => !prevState)
  }, [])

  const {
    data: { activeCategoryLabel, selectedMovie, movieList, categoryList },
    handleSelectMovie,
    handleActiveCategory,
    handleNextCategory,
    handlePreviousCategory
  } = useVotes()

  const handlePosterClick = useCallback((movieTitle: string) => {
    if (selectedMovie) {
      return
    }

    setIsOpen(true)
    setActiveMovie(movieTitle)
  }, [selectedMovie])

  const handleAccordionClick = useCallback(
    (categoryLabel: string) => {
      handleActiveCategory(categoryLabel)
      setIsDropdownOpen(false)

      router.replace(`${pathname}`)
    },
    [pathname, router, handleActiveCategory]
  )

  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
  }, [])

  const isDropdownOpen = useMemo(() => {
    const search = searchParams.get("q")
    if (mount && (window.innerWidth > 1023)) {
      setIsDropdownOpen(true)
      return true
    }
    return search === "allCategories" || isOpen;
  }, [searchParams, isOpen, mount])
  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Text color={TextColors.white} size="medium">
            Escolher
          </Text>
          <Text color={TextColors.yellow} size="large">
            {activeCategoryLabel}
          </Text>
          <MovieImage
            src={
              movieList.find((movie) => movie.titlePT === activeMovie)?.image
            }
            alt="Movie Poster"
            width={150}
            height={225}
          />
          <MovieTitleContainer>
            <Text color={TextColors.white} size="medium">
              {activeMovie}
            </Text>
          </MovieTitleContainer>
          <Button
            label="Votar"
            onClick={() => {
              handleSelectMovie(activeMovie)
              closeModal()
            }}
          />
        </Modal>
      )}
      <Container>
        <FixedContainer>
          <HeaderContainer>
            <Header />
          </HeaderContainer>
          <DropdownContainer>
            <DropdownHeader
              isOpen={isDropdownOpen}
              handleToggle={handleToggle}
            />
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
          <DropdownContainer className={isDropdownOpen ? "isDropdownOpen" : ""}>
            <Dropdown
              isOpen={isDropdownOpen}
              handleClick={handleAccordionClick}
              categoryList={categoryList}
            />
          </DropdownContainer>
        )}
        {(!isDropdownOpen || window.innerWidth > 1023) ? (
          <>
            <PosterList
              list={movieList}
              selectedMovie={selectedMovie}
              handleSelectMovie={handlePosterClick}
            />
            <ButtonsContainer>
              <ButtonsCard>
                <Button
                  label="Categoria anterior"
                  variant="secondary"
                  onClick={handlePreviousCategory}
                />
                <Button
                  label="Próxima categoria"
                  onClick={handleNextCategory}
                />
              </ButtonsCard>
            </ButtonsContainer>
          </>
        ) : null}
      </Container>
    </>
  )
}

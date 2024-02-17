import axios from "axios"
import Accordion from "../Accordion/Accordion"
import Button from "../Buttons/Button"
import Dropdown from "../Dropdown/Dropdown"
import DropdownHeader from "../Dropdown/DropdownHeader"
import Header from "../Header/Header"
import Modal from "../Modal/Modal"
import PosterList from "../Poster/PosterList"
import Text, { TextColors } from "../Typography/Text"

import useVotes from "./hooks/useVotes"

import Image from "next/image"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
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
  z-index: 10;
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

const MovieImage = styled(Image)`
  border-radius: 8px;
`

const MovieTitleContainer = styled.div`
  margin-bottom: 12px;
  text-align: center;
`

interface VotesPageProps {
  environment: {
    url: string
  }
}

export default function VotesPage(props: VotesPageProps) {
  const { url } = props.environment

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
    updateStorageVote
  } = useVotes()

  const handlePosterClick = useCallback(
    (movieTitle: string) => {
      if (selectedMovie) {
        return
      }

      setIsOpen(true)
      setActiveMovie(movieTitle)
    },
    [selectedMovie]
  )

  const handleAccordionClick = useCallback(
    (categoryLabel: string) => {
      handleActiveCategory(categoryLabel)
      setIsDropdownOpen(false)

      router.replace(`${pathname}`)
    },
    [pathname, router, handleActiveCategory]
  )

  const isDropdownOpen = useMemo(() => {
    const search = searchParams.get("q")

    return search === "allCategories" || isOpen
  }, [searchParams, isOpen])

  const handleConfirmVote = useCallback(async () => {
    handleSelectMovie(activeMovie)
    updateStorageVote()
    const URL = `${url}/api/oscar/votes`

    await axios.post(URL, {
      movie: activeMovie,
      category: activeCategoryLabel
    })
    closeModal()
  }, [
    activeMovie,
    activeCategoryLabel,
    url,
    handleSelectMovie,
    updateStorageVote,
    closeModal
  ])

  useEffect(() => {
    handleActiveCategory("Melhor Filme")
  }, [])

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
          <Button label="Votar" onClick={handleConfirmVote} />
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
          <DropdownContainer className="isDropdownOpen">
            <Dropdown
              isOpen={isDropdownOpen}
              handleClick={handleAccordionClick}
              categoryList={categoryList}
            />
          </DropdownContainer>
        )}
        {!isDropdownOpen && (
          <>
            <PosterList
              list={movieList}
              selectedMovie={selectedMovie}
              handleSelectMovie={handlePosterClick}
            />
            <ButtonsContainer>
              <ButtonsCard>
                <Button
                  label="Próxima categoria"
                  onClick={handleNextCategory}
                />
              </ButtonsCard>
            </ButtonsContainer>
          </>
        )}
      </Container>
    </>
  )
}

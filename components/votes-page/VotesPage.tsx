"use client"

import axios from "axios"
import Accordion from "../Accordion/Accordion"
import Button from "../Buttons/Button"
import Dropdown from "../Dropdown/Dropdown"
import DropdownHeader from "../Dropdown/DropdownHeader"
import Header from "../Header/Header"
import Modal from "../Modal/Modal"
import Poster from "../Poster/Poster"
import PosterList from "../Poster/PosterList"
import Text, { TextColors } from "../Typography/Text"

import useVotes from "./hooks/useVotes"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import clsx from "clsx"

// general
const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.color.gray_bg};

  &.isLargeScreen {
    width: 100%;
    padding: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

// small screens
const FixedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0;
  background-color: ${(props) => props.theme.color.gray_bg};
  position: fixed;
  z-index: 10;
`

const HeaderContainer = styled.div`
  width: 100%;
  padding: 8px 8px 0px 8px;

  &.isLargeScreen {
    padding: 0px;
  }
`

const DropdownHeaderContainer = styled.div`
  width: 100%;
  padding: 8px 8px 8px 8px;

  &.isDropdownOpen {
    padding-top: 134px;
  }
`

const DropdownContainer = styled.div`
  width: 100%;
  padding: 0px 8px 0px 8px;

  &.isDropdownOpen {
    padding-top: 126px;
    padding-bottom: 8px;
  }
`

const AccordionContainer = styled.div`
  width: 100%;
  padding: 0px 8px 8px 8px;

  &.isLargeScreen {
    width: auto;
  }
`

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 8px 8px 8px 8px;
  position: fixed;
  bottom: 0;
  background-color: ${(props) => props.theme.color.gray_bg};

  &.isLargeScreen {
    padding: 8px 16px 16px 16px;
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

  &.isLargeScreen {
    flex-direction: row;
    gap: 12px;
    padding: 12px;
  }
`

// large screens

const MovieCategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding-top: 8px;
  justify-content: center;
  gap: 8px;
`

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const DowpdownLargeContainer = styled.div`
  width: 360px;
  height: 100%;
  padding-top: 8px;
  padding-bottom: 76px;
`

export default function VotesPage() {
  const [isOpen, setIsDropdownOpen] = useState(false)

  const [isModalOpen, setIsOpen] = useState(false)

  const [isLoading, setIsLoading] = useState(false)

  const [mount, setMount] = useState(false)

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
    updateStorageVote,
    handlePreviousCategory
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

    const URL = `${pathname.replace("/votes", "")}/api/oscar/votes`

    setIsLoading(true)

    await axios.post(URL, {
      movie: activeMovie,
      category: activeCategoryLabel
    })

    setIsLoading(false)

    closeModal()

    handleNextCategory()
  }, [
    activeMovie,
    activeCategoryLabel,
    pathname,
    handleSelectMovie,
    updateStorageVote,
    closeModal,
    handleNextCategory
  ])

  useEffect(() => {
    handleActiveCategory("Melhor Filme")
    setMount(true)
  }, [])

  const isLargeScreen = useMemo(() => {
    return mount && window.innerWidth > 1024
  }, [mount])

  return (
    <>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Text color={TextColors.yellow} size="medium">
            {activeCategoryLabel}
          </Text>
          <Poster
            handleSelectMovie={() => {}}
            movieTitle={activeMovie}
            moviePoster={
              movieList.find((movie) => movie.titlePT === activeMovie)?.image
            }
            variant="selected"
          />
          <Button
            label="Confirmar"
            onClick={handleConfirmVote}
            isLoading={isLoading}
          />
        </Modal>
      )}

      {!isLargeScreen && (
        <Container>
          <FixedContainer>
            <HeaderContainer>
              <Header />
            </HeaderContainer>
            <DropdownHeaderContainer>
              <DropdownHeader
                isOpen={isDropdownOpen}
                handleToggle={handleToggle}
              />
            </DropdownHeaderContainer>
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
      )}

      {isLargeScreen && (
        <Container className={clsx({ isLargeScreen })}>
          <HeaderContainer className={clsx({ isLargeScreen })}>
            <Header />
          </HeaderContainer>
          <Content>
            <MovieCategoryContainer>
              <Accordion
                label={activeCategoryLabel}
                variant="secondary"
                hasTransparency
                hasVote={!!selectedMovie}
              />
              <PosterList
                list={movieList}
                selectedMovie={selectedMovie}
                handleSelectMovie={handlePosterClick}
              />
            </MovieCategoryContainer>
            <DowpdownLargeContainer>
              <Dropdown
                isOpen
                handleClick={handleAccordionClick}
                categoryList={categoryList}
                isLargeScreen
              />
            </DowpdownLargeContainer>
          </Content>

          <ButtonsContainer className={clsx({ isLargeScreen })}>
            <ButtonsCard className={clsx({ isLargeScreen })}>
              <Button
                label="Categoria anterior"
                onClick={handlePreviousCategory}
                variant="secondary"
              />
              <Button label="Próxima categoria" onClick={handleNextCategory} />
            </ButtonsCard>
          </ButtonsContainer>
        </Container>
      )}
    </>
  )
}

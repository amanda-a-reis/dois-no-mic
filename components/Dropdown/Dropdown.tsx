import styled from "styled-components"
import ChrevronRight from "../Icons/ChrevronRight"
import Accordion from "../Accordion/Accordion"
import { memo, useCallback, useState } from "react"
import clsx from "clsx"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Header = styled.button`
  width: 360px;
  height: 42px;
  background-color: #2f2f2f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 12px 16px;
  border: none;
  cursor: pointer;

  &.isOpen {
    background-color: transparent;
  }
`

const HeaderLabel = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  color: #ffffff;

  &.isOpen {
    color: #edce74;
  }
`

const MovieCategoryList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const mockMovieList = [
  "Ação",
  "Aventura",
  "Comédia",
  "Drama",
  "Ficção Científica",
  "Romance",
  "Terror"
]

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState)
  }, [])

  return (
    <Container>
      <Header className={clsx({ isOpen })} onClick={handleToggle}>
        <HeaderLabel className={clsx({ isOpen })}>
          Todas as categorias
        </HeaderLabel>

        { !isOpen && <ChrevronRight />}
      </Header>

      {isOpen && (
        <MovieCategoryList>
          {mockMovieList.map((movie) => (
            <Accordion key={movie} label={movie} />
          ))}
        </MovieCategoryList>
      )}
    </Container>
  )
}

export default memo(Dropdown)

import Accordion from "../Accordion/Accordion"
import ChrevronRight from "../Icons/ChrevronRight"
import Text from "../Typography/Text"

import clsx from "clsx"
import { memo, useCallback, useState } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Header = styled.button`
  width: 360px;
  height: 42px;
  background-color: ${(props) => props.theme.color.gray_secondary};
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

const HeaderLabel = styled(Text)`
  color: ${(props) => props.theme.color.white};

  &.isOpen {
    color: ${(props) => props.theme.color.yellow};
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

        {!isOpen && <ChrevronRight />}
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

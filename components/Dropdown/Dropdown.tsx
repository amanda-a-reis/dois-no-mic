import Accordion from "../Accordion/Accordion"
import ChrevronRight from "../Icons/ChrevronRight"
import Text from "../Typography/Text"

import clsx from "clsx"
import { memo } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Header = styled.button`
  width: 100%;
  height: 42px;
  background-color: ${(props) => props.theme.color.gray_primary};
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
  "Melhor Filme",
  "Melhor Ator",
  "Melhor Atriz",
  "Melhor Filme Internacional",
  "Melhor Canção Original",
  "Melhor Filme de Animação",
  "Melhor Direção",
  "Melhores Efeitos Visuais",
  "Melhor Roteiro Original",
  "Melhor Atriz Coadjuvante",
  "Melhor Ator Coadjuvante",
  "Melhor Roteiro Adaptado",
  "Melhor Trilha Sonora Original",
  "Melhor Fotografia",
  "Melhor Maquiagem e Penteados",
  "Melhor Direção de Arte",
  "Melhor Montagem",
  "Melhor Figurino",
  "Melhor Som"
]

interface DropdownProps {
  handleToggle: () => void
  isOpen: boolean
}

const Dropdown = (props: DropdownProps) => {
  const { handleToggle, isOpen } = props
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
          {mockMovieList.map((movie, index) => (
            <Accordion key={movie} label={movie} hasLightBg={(index % 2) === 0}/>
          ))}
        </MovieCategoryList>
      )}
    </Container>
  )
}

export default memo(Dropdown)

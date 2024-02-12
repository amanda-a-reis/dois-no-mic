import Accordion from "../Accordion/Accordion"

import { memo } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  isOpen: boolean
}

const Dropdown = (props: DropdownProps) => {
  const { isOpen } = props
  return (
    <Container>
      {isOpen && (
        <MovieCategoryList>
          {mockMovieList.map((movie, index) => (
            <Accordion key={movie} label={movie} hasLightBg={index % 2 === 0} />
          ))}
        </MovieCategoryList>
      )}
    </Container>
  )
}

export default memo(Dropdown)

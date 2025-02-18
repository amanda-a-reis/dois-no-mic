import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  background-color: rgba(63, 63, 63, 0.74);
  border-radius: 8px;
  padding: 0 16px;
  gap: 8px;

  overflow: hidden;

  @media (min-width: 1023px) {
    height: 100%;
  }
`

const Banner = () => {
  return (
    <Container>
      <Text size="xLarge" weigth="medium">
        Escolha seus favoritos para o Oscar® 2025
      </Text>
      <Text size="large" color={TextColors.white}>
        O resultado dos filmes mais votados será apresentado no podcast no dia
        28 de fevereiro às 12:00.
      </Text>
    </Container>
  )
}

export default memo(Banner)

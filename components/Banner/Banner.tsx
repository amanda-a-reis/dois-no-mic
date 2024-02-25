import Text, { TextColors } from "../Typography/Text"

import { memo } from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 420px;
  background-color: rgba(63, 63, 63, 0.74);
  border-radius: 8px;
  padding: 0 16px;
  gap: 8px;

  @media (min-width: 1023px) {
    height: 100%;
  }
`

const Banner = () => {
  return (
    <Container>
      <Text size="xLarge" weigth="medium">
        Escolha seus favoritos para o Oscar® 2024
      </Text>
      <Text size="large" color={TextColors.white}>
        O resultado dos filmes mais votados será apresentado no podcast em
        [dia/hora].
      </Text>
    </Container>
  )
}

export default memo(Banner)

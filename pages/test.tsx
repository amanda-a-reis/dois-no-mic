import styled from "styled-components"
import ButtonChevronIcon from "../components/Buttons/ButtonChevronIcon"
import Header from "../components/Header/Header"
import Button from "../components/Buttons/Button"
import Accordion from "../components/Accordion/Accordion"
import Poster from "../components/Poster/Poster"
import Dropdown from "../components/Dropdown/Dropdown"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-left: 20px;
`

export default function Test() {
  return (
    <Container>
      <Dropdown />

      <ButtonChevronIcon label="Label" direction="right" variant="secondary" />
      <ButtonChevronIcon label="Label" direction="right" variant="primary" />
      <ButtonChevronIcon label="Label" direction="left" variant="secondary" />
      <ButtonChevronIcon label="Label" direction="left" variant="primary" />

      <Header />
      <Header hasTransparency />

      <Button label="Próxima categoria" />
      <Button label="Todas as categorias" variant="secondary" />

      <Accordion label="Melhor Filme" />
      <Accordion label="Melhor Filme" variant="secondary" />
      <Accordion label="Melhor Filme" variant="secondary" hasVoted />

      <Poster
        movieTile="Top Gun"
        moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
        variant="default"
      />
      <Poster
        movieTile="Top Gun"
        moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
        variant="active"
      />
      <Poster
        movieTile="Top Gun"
        moviePoster="https://m.media-amazon.com/images/M/MV5BZWYzOGEwNTgtNWU3NS00ZTQ0LWJkODUtMmVhMjIwMjA1ZmQwXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_Ratio0.6757_AL_.jpg"
        variant="selected"
      />
    </Container>
  )
}

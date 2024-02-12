import styled from "styled-components"
import Poster from "./Poster"

const PostersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 100px;
  padding-top: 200px;
`

interface MovieInfo {
  movieTitle: string
  moviePoster: string
}

interface PosterListProps {
  list: MovieInfo[]
  movieSelected: null | string
  handleSelectMovie: (movieTitle: string) => void
}

const PosterList = (props: PosterListProps) => {
  const { list, movieSelected, handleSelectMovie } = props
  return (
    <PostersContainer>
      {list.map((movie) => (
        <Poster
          key={movie.movieTitle}
          movieTitle={movie.movieTitle}
          moviePoster={movie.moviePoster}
          variant={movieSelected === movie.movieTitle ? "selected" : "default"}
          handleSelectMovie={handleSelectMovie}
        />
      ))}
    </PostersContainer>
  )
}

export default PosterList

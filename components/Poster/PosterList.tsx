import { IMovie, IVote } from "../../movies/data"
import Poster from "./Poster"

import styled from "styled-components"

const PostersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 120px;
  padding-top: 200px;
`

interface PosterListProps {
  list: IMovie[]
  movieSelected: IVote["selectedMovie"]
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

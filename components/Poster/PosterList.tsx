import { IMovie, IVote } from "../../movies/protocols"
import Poster from "./Poster"

import styled from "styled-components"

const PostersContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: 120px;
  padding-top: 200px;
`

interface PosterListProps {
  list: IMovie[]
  selectedMovie: IVote["selectedMovie"]
  handleSelectMovie: (movieTitle: string) => void
}

const PosterList = (props: PosterListProps) => {
  const { list, selectedMovie, handleSelectMovie } = props
  return (
    <PostersContainer>
      {list.map((movie) => (
        <Poster
          key={movie.titlePT}
          movieTitle={movie.titlePT}
          moviePoster={movie.image}
          variant={selectedMovie === movie.titlePT ? "selected" : "default"}
          handleSelectMovie={handleSelectMovie}
          disabled={!!selectedMovie && selectedMovie !== movie.titlePT}
        />
      ))}
    </PostersContainer>
  )
}

export default PosterList

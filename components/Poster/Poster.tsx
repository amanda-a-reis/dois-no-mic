import Image from "next/image"
import styled from "styled-components"
import Heart from "../Icons/Heart"
import { IconColors } from "../Icons/types/IconProps"
import HeartFill from "../Icons/HeartFill"
import { memo } from "react"

const Container = styled.div`
  width: 240px;
  height: 387px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const MovieImage = styled(Image)`
  border-radius: 8px;
`

const MovieInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 8px;
`

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`

const MovieTitle = styled.p`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

  display: flex;
  align-items: center;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 100%;
  width: 100%;
  margin: 0%;

  &.fontColor-selected {
    color: #edce74;
  }

  &.fontColor-default {
    color: #ffffff;
  }

  &.fontColor-active {
    color: #ffffff;
  }
`

interface PosterProps {
  movieTile: string
  moviePoster: string
  variant: "default" | "active" | "selected"
}

const Poster = (props: PosterProps) => {
  const { movieTile, moviePoster, variant } = props
  return (
    <Container>
      <MovieImage
        src={moviePoster}
        alt="Movie Poster"
        width={240}
        height={360}
      />
      <MovieInfoContainer>
        <IconContainer>
          {variant === "default" && null}
          {variant === "active" && <Heart />}
          {variant === "selected" && <HeartFill color={IconColors.selected} />}
        </IconContainer>
        <MovieTitle className={`fontColor-${variant}`}>{movieTile}</MovieTitle>
      </MovieInfoContainer>
    </Container>
  )
}

export default memo(Poster)

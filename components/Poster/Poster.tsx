import clsx from "clsx"
import Heart from "../Icons/Heart"
import HeartFill from "../Icons/HeartFill"
import { IconColors } from "../Icons/types/IconProps"
import Text, { TextColors, TextWeights } from "../Typography/Text"

import Image from "next/legacy/image"
import { memo, useCallback } from "react"
import styled from "styled-components"

const Container = styled.button`
  width: 150px;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-items: flex-start;

  &.disabled {
    filter: opacity(0.3);
  }
`

const MovieImage = styled(Image)`
  border-radius: 8px;
`

const MovieTitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  margin: 0;
  text-align: left;
`

const MovieInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
`

const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-start;

  &.isVoted {
    padding-right: 8px;
  }
`

interface PosterProps {
  movieTitle: string
  moviePoster: string
  variant: "default" | "active" | "selected"
  handleSelectMovie: (movieTitle: string) => void
  disabled?: boolean
}

const theme = {
  default: {
    fontColor: TextColors.white,
    icon: null
  },
  active: {
    fontColor: TextColors.white,
    icon: <Heart />
  },
  selected: {
    fontColor: TextColors.yellow,
    icon: <HeartFill color={IconColors.selected} />
  }
}

const Poster = (props: PosterProps) => {
  const {
    movieTitle,
    moviePoster,
    variant,
    disabled = false,
    handleSelectMovie
  } = props

  const onMovieClick = useCallback(() => {
    handleSelectMovie(movieTitle)
  }, [movieTitle, handleSelectMovie])

  return (
    <Container
      onClick={onMovieClick}
      className={clsx({ disabled })}
      disabled={disabled}
    >
      <MovieImage
        src={moviePoster}
        alt="Movie Poster"
        width={150}
        height={225}
        placeholder="blur"
        blurDataURL="/shimmer.gif"
      />
      <MovieInfoContainer>
        <IconContainer className={clsx({ isVoted: variant === "selected" })}>{theme[variant].icon}</IconContainer>
        <MovieTitleContainer>
          <Text color={theme[variant].fontColor} weigth={TextWeights.medium} size="small">{movieTitle}</Text>
        </MovieTitleContainer>
      </MovieInfoContainer>
    </Container>
  )
}

export default memo(Poster)

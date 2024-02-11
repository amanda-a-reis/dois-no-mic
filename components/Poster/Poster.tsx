import Heart from "../Icons/Heart"
import HeartFill from "../Icons/HeartFill"
import { IconColors } from "../Icons/types/IconProps"
import Text, { TextColors } from "../Typography/Text"

import Image from "next/image"
import { memo } from "react"
import styled from "styled-components"

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

const MovieTitleContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0%;
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

interface PosterProps {
  movieTile: string
  moviePoster: string
  variant: "default" | "active" | "selected"
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
          {theme[variant].icon}
        </IconContainer>
        <MovieTitleContainer>
          <Text color={theme[variant].fontColor}>{movieTile}</Text>
        </MovieTitleContainer>
      </MovieInfoContainer>
    </Container>
  )
}

export default memo(Poster)

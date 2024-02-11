import DoisNoMicLogo from "../Icons/DoisNoMicLogo"
import InstagramLogo from "../Icons/InstagramLogo"
import SpotifyLogo from "../Icons/SpotifyLogo"

import Link from "next/link"
import { memo } from "react"
import clsx from "clsx"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  height: 60px;
  background-color: ${(props) => props.theme.color.gray_secondary};
  border-radius: 8px;

  &.hasTransparency {
    background-color: rgb(47, 47, 47, 0.75);
  }
`

const SocialMediaContainer = styled.div`
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LinkContainer = styled(Link)`
  height: 24px;
`

interface HeaderProps {
  hasTransparency?: boolean
}

const Header = (props: HeaderProps) => {
  const { hasTransparency = false } = props

  return (
    <Container className={clsx({ hasTransparency })}>
      <DoisNoMicLogo />

      <SocialMediaContainer>
        <LinkContainer
          href="https://open.spotify.com/show/5C6L6u5zfnilGXocFPHGLP?si=c2179ebab7f94884&nd=1"
          target="_blank"
        >
          <SpotifyLogo />
        </LinkContainer>

        <LinkContainer
          href="https://www.instagram.com/doisnomic/"
          target="_blank"
        >
          <InstagramLogo />
        </LinkContainer>
      </SocialMediaContainer>
    </Container>
  )
}

export default memo(Header)

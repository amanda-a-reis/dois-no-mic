import type { ReactElement } from 'react'
import TopMenu from '../TopMenu/TopMenu'
import OscarTitle from './OscarTitle'
import HeroImage from './HeroImage'
import HomeText from './HomeText'
import HomeButton from './HomeButton'

export default function HomePage (): ReactElement {
  return (
    <>
      <TopMenu />
      <OscarTitle />
      <HeroImage />
      <HomeText />
      <HomeButton />
    </>
  )
}

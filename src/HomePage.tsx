import type { ReactElement } from 'react'
import TopMenu from '../components/TopMenu/TopMenu'
import OscarTitle from '../components/Home/OscarTitle'
import HeroImage from '../components/Home/HeroImage'
import HomeText from '../components/Home/HomeText'
import HomeButton from '../components/Home/HomeButton'

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

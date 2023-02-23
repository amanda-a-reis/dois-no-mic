import type { ReactElement } from 'react'
import TopMenu from './TopMenu/TopMenu'
import style from '../../styles/home/home.module.scss'
import OscarTitle from './OscarTitle/OscarTitle'
import HeroImage from './HeroImage'
import HomeText from './HomeText'
import HomeButton from './HomeButton'

export default function HomePage (): ReactElement {
  return (
        <div className={style.container}>
            <TopMenu />
            <OscarTitle />
            <HeroImage />
            <HomeText />
            <HomeButton />
        </div>
  )
}

import type { ReactElement } from 'react'
import style from '../../styles/top-menu/TopMenu.module.scss'
import SocialMedia from './SocialMedia'

import logo from '../../public/logo.webp'
import Image from 'next/image'

export default function TopMenu (): ReactElement {
  return (
    <div className={style.container}>
      <div className={style.images}>
        <Image
          src={logo}
          alt="DoisNoMic podcast logo"
          className={style.logo}
          width={280}
          height={500}
          placeholder="blur"
          quality={100}
        />
        <SocialMedia />
      </div>
      <div className={style.divider}></div>
      <div className={style.shadow}></div>
    </div>
  )
}

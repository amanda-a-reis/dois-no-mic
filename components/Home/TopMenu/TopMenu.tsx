import type { ReactElement } from 'react'
import style from '../../../styles/home/top-menu/TopMenu.module.scss'
import SocialMedia from './SocialMedia'

import logo from '../../../public/logo.webp'
import Image from 'next/image'
import Divider from './Divider'
import ShadowGradient from './ShadowGradient'

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
      <Divider />
      <ShadowGradient />
    </div>
  )
}

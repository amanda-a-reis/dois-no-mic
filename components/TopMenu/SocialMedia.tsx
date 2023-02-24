import Image from 'next/image'
import Link from 'next/link'
import type { ReactElement } from 'react'
import style from '../../styles/top-menu/SocialMedia.module.scss'

import instagram from '../../public/instagram.webp'
import spotify from '../../public/spotify.webp'

export default function SocialMedia (): ReactElement {
  return (
    <div className={style.container}>
      <Link href="https://www.instagram.com/doisnomic/" target="_blank" className={style.icons}>
        <Image
          src={instagram}
          alt="Instagram logo in white minimalist version"
          className={style.icons}
          placeholder="blur"
          quality={100}
        />
      </Link>
      <Link href="https://open.spotify.com/show/5C6L6u5zfnilGXocFPHGLP?si=c2179ebab7f94884&nd=1" target="_blank" className={style.icons}>
        <Image
          src={spotify}
          alt="Sppotify logo in white minimalist version"
          className={style.icons}
          placeholder="blur"
          quality={100}
        />
      </Link>
    </div>
  )
}

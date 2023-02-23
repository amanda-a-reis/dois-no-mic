import type { ReactElement } from 'react'
import Link from 'next/link'
import style from '../../styles/home/HomeButton.module.scss'
import Image from 'next/image'

import arrow from '../../public/arrow.png'

export default function HomeButton (): ReactElement {
  return (
    <div className={style.container}>
      <Link href="/votes" className={style.homeButtonLink}>
        <button className={style.homeButton}>
          Votar
          <Image
            src={arrow}
            alt="Arrow icon pointing right"
            className={style.icon}
          />
        </button>
      </Link>
    </div>
  )
}

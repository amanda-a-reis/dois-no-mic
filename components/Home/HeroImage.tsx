import type { ReactElement } from 'react'
import Image from 'next/image'
import figurine from '../../public/figurine.webp'
import bg from '../../public/bg.webp'
import style from '../../styles/home/HeroImage.module.scss'

export default function HeroImage (): ReactElement {
  return (
    <div className={style.container}>
      <Image
        src={figurine}
        alt="Oscar statuette photo"
        className={style.figurine}
        placeholder="blur"
      />
      <Image
        src={bg}
        alt="Composite of various movie posters from Oscar 2023 awards"
        className={style.bg}
        placeholder="blur"
        sizes="(max-width: 414px) 100vw"
      />
    </div>
  )
}

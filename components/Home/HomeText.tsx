import type { ReactElement } from 'react'
import style from '../../styles/home/HomeText.module.scss'

export default function HomeText (): ReactElement {
  return (
    <div className={style.container}>
      <p className={style.title}>Escolha seus favoritos</p>
      <p className={style.description}>Os resultados dos filmes mais votados serão apresentados no podcast.</p>
    </div>
  )
}

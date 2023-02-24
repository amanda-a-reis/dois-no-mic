import type { ReactElement } from 'react'
import style from '../../styles/home/OscarTitle.module.scss'

export default function OscarTitle (): ReactElement {
  return (
    <div className={`${style.container} ${style.flexConfig}`}>
      <div
        className={`${style.top} ${style.flexConfig} ${style.marginDefault}`}
      >
        <div className={style.line}></div>
        <p className={`${style.the} ${style.textDefault}`}>THE</p>
        <div className={style.line}></div>
      </div>
      <h1
        className={`${style.oscars} ${style.flexConfig} ${style.marginDefault}`}
      >
        OSCARS
      </h1>
      <p
        className={`${style.year} ${style.textDefault} ${style.marginDefault} ${style.flexConfig}`}
      >
        2023
      </p>
    </div>
  )
}

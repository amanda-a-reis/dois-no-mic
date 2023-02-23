import type { ReactElement } from 'react'
import style from '../../../styles/home/oscar-title/OscarTitle.module.scss'
import LineTitle from './LineTitle'

export default function OscarTitle (): ReactElement {
  return (
    <div className={`${style.container} ${style.flexConfig}`}>
      <div
        className={`${style.top} ${style.flexConfig} ${style.marginDefault}`}
      >
        <LineTitle />
        <p className={`${style.the} ${style.textDefault}`}>THE</p>
        <LineTitle />
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

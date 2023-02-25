import Image from 'next/image'
import type { ReactElement } from 'react'
import style from '../../styles/votes/Card.module.scss'
import { clsx } from 'clsx'

import like from '../../public/white-heart.svg'

interface MovieProp {
  title: string
  image: string
  type: string
  vote: string
  result: string
}

export default function Card ({ title, image, type, vote, result = '' }: MovieProp): ReactElement {
  const altInfo = `${title} Movie Poster`
  return (
    <div className={style.container}>
      <div
        className={clsx({
          [style.card]: type === 'default',
          [style.votedCard]: type === 'voted',
          [style.excludedCard]: type === 'excluded'
        })}
      >
        <Image
          src={image}
          alt={altInfo}
          width={400}
          height={400}
          className={
            style.image
          }
        />
        <div className={style.vote}>
          <p
            className={clsx({
              [style.text]: type === 'default',
              [style.votedText]: type === 'voted',
              [style.excludedText]: type === 'excluded'
            })}
          >
            {vote}
          </p>
          <Image
            src={like}
            alt="Heart icon"
            className={clsx({
              [style.icon]: type === 'default',
              [style.votedIcon]: type === 'voted'
            })}
          />
        </div>
      </div>
      <p
        className={clsx({
          [style.title]: type === 'default',
          [style.votedTitle]: type === 'voted',
          [style.excludedTitle]: type === 'excluded'
        })}
      >
        {title}
      </p>
    </div>
  )
}

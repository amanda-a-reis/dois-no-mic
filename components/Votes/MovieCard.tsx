import Image from 'next/image'
import type { ReactElement } from 'react'
import style from '../../styles/votes/Card.module.scss'
import { clsx } from 'clsx'

import like from '../../public/white-heart.svg'

interface MovieCardProps {
  movieTitle: string
  posterImage: string
  type: 'default' | 'voted' | 'excluded'
  voteStatusLabel: string
}

export default function MovieCard (props: MovieCardProps): ReactElement {
  const { movieTitle, posterImage, type, voteStatusLabel } = props

  const altInfo = `${movieTitle} Movie Poster`
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
          src={posterImage}
          alt={altInfo}
          width={400}
          height={400}
          className={
            style.image
          }
          placeholder="blur"
          blurDataURL="../../public/placeholder.webp"
          priority
        />
        <div className={style.vote}>
          <p
            className={clsx({
              [style.text]: type === 'default',
              [style.votedText]: type === 'voted',
              [style.excludedText]: type === 'excluded',
              [style.disabled]: voteStatusLabel === 'DISABLED'
            })}
          >
            {voteStatusLabel}
          </p>
          <Image
            src={like}
            alt="Heart icon"
            className={clsx({
              [style.icon]: type === 'default',
              [style.votedIcon]: type === 'voted',
              [style.excludedIcon]: type === 'excluded',
              [style.disabledIcon]: voteStatusLabel === 'DISABLED'
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
        {movieTitle}
      </p>
    </div>
  )
}

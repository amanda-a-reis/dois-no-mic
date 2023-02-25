import { type ReactElement, useState } from 'react'
import TopMenu from '../TopMenu/TopMenu'
import Card from './Card'
import style from '../../styles/votes/VotesPages.module.scss'
import axios from 'axios'
import { clsx } from 'clsx'

import {
  categoriesData
} from '../../movies/moviesData'

interface Environment {
  environment: {
    apiKey: string
    url: string
  }
}

export default function VotesPage ({ environment }: Environment): ReactElement {
  const [id, setId] = useState(0)
  const [chosenMovies, setChosenMovies] = useState([])
  const [categoriesName, setCategoriesName] = useState([])

  const userVotes = {
    name: 'Meus Votos',
    categories: categoriesName,
    movies: chosenMovies,
    voted: true,
    status: [],
    size: chosenMovies.length
  }

  const [categories, setCategories] = useState([...categoriesData, userVotes])
  const categoriesSize = categories.length

  const [, setStatus] = useState(categories[id].status)
  const [isVoted, setIsVoted] = useState(false)

  function changeStatus (index: number): void {
    const updateCategories = categories

    const listExcluded = Array.from({ length: categories[id].size }, () => 'excluded')
    const list = listExcluded
    list[index] = 'voted'
    setStatus(list)

    updateCategories[id].status = list

    setIsVoted(true)
    updateCategories[id].voted = true

    setCategories(updateCategories)
  }

  function changeUserVotes (index: number): void {
    const updateCategories = categories

    const newVotes = chosenMovies
    newVotes.push(categories[id].movies[index])
    setChosenMovies(newVotes)

    updateCategories[categoriesSize - 1].movies = chosenMovies
    const newCategName = categoriesName
    newCategName.push(categories[id].name)
    setCategoriesName(newCategName)

    const list = Array.from({ length: chosenMovies.length }, () => 'voted')
    updateCategories[categoriesSize - 1].status = list

    setCategories(updateCategories)
  }

  function increment (): void {
    if (id === categoriesSize - 1) {
      setId(categoriesSize - 1)
    } else {
      setId(id + 1)
    }
  }

  function decrement (): void {
    if (id === 0) {
      setId(0)
    } else {
      setId(id - 1)
    }
  }

  async function postVote (movie: string, category: string): Promise<void> {
    const URL = `${environment.url}/api/oscar/votes/${environment.apiKey}`
    await axios.post(URL, {
      movie,
      category
    })
  }

  return (
    <div className={style.view}>
      <TopMenu />
      <div
        className={clsx({
          [style.container]: id < categoriesSize - 1,
          [style.containerVotes]: id === categoriesSize - 1
        })}
      >
        <div
          className={style.categoryContainer}
        >
          <div className={style.line}></div>
          <h1 className={style.category}>{categories[id].name}</h1>
          <div className={style.line}></div>
        </div>
        <div className={style.movies}>
          {categories[id].movies.map((movie, index) => (
            <button
            className={clsx({
              [style.select]: id < categoriesSize - 1,
              [style.default]: id === categoriesSize - 1
            })}
              key={index}
              onClick={async () => {
                changeStatus(index)
                changeUserVotes(index)
                await postVote(movie.titlePT, categories[id].name)
              }}
              disabled={categories[id].voted}
            >
              {id === categoriesSize - 1 &&
              categories[categoriesSize - 1].movies.length === 0
                ? (
                    ''
                  )
                : id === categoriesSize - 1
                  ? (
                <div className={style.choosed}>
                  <p className={style.categorieName}>{categoriesName[index]}</p>
                  <Card
                    title={movie.titlePT}
                    image={movie.image}
                    key={index}
                    type={categories[id].status[index]}
                    vote={
                      isVoted && categories[id].status[index] === 'voted'
                        ? 'VOTADO'
                        : 'VOTAR'
                    }
                    result=''
                  />
                </div>
                    )
                  : (
                <Card
                  title={movie.titlePT}
                  image={movie.image}
                  key={index}
                  type={categories[id].status[index]}
                  vote={
                    isVoted && categories[id].status[index] === 'voted'
                      ? 'VOTADO'
                      : 'VOTAR'
                  }
                  result=''
                />
                    )}
            </button>
          ))}
        </div>
      </div>
      <div className={style.categoryButtonContainer}>
        <button
          className={style.categoryButton}
          onClick={() => {
            decrement()
          }}
        >
          {id === 0 ? '' : '< Anterior'}
        </button>
        <p className={style.categoryText}>Categoria</p>
        <button
          className={style.categoryButton}
          onClick={() => {
            increment()
          }}
        >
          {id === categoriesSize - 2
            ? 'MEUS VOTOS'
            : id === categoriesSize - 1
              ? ''
              : 'Próximo >'}
        </button>
      </div>
    </div>
  )
}

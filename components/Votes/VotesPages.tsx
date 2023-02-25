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
  const [categoryNames, setCategoryNames] = useState([])

  const userVotes = {
    name: 'Meus Votos',
    categories: categoryNames,
    movies: chosenMovies,
    voted: true,
    status: [],
    size: chosenMovies.length
  }

  const [categories, setCategories] = useState([...categoriesData, userVotes])
  const [, setStatus] = useState(categories[id].status)

  const userVotesId = categories.length - 1

  function changeStatus (index: number): void {
    const updateCategories = categories

    const listExcluded = Array.from({ length: categories[id].size }, () => 'excluded')
    const list = listExcluded
    list[index] = 'voted'
    setStatus(list)

    updateCategories[id].status = list
    updateCategories[id].voted = true

    setCategories(updateCategories)
  }

  function changeUserVotes (index: number): void {
    const updateCategories = categories

    const newVotes = chosenMovies
    newVotes.push(categories[id].movies[index])
    setChosenMovies(newVotes)

    updateCategories[userVotesId].movies = chosenMovies
    const newCategName = categoryNames
    newCategName.push(categories[id].name)
    setCategoryNames(newCategName)

    updateCategories[userVotesId].size = chosenMovies.length

    const list = Array.from({ length: updateCategories[userVotesId].size }, () => 'voted')
    updateCategories[userVotesId].status = list

    setCategories(updateCategories)
  }

  function next (): void {
    if (id === userVotesId) {
      setId(userVotesId)
    } else {
      setId(id + 1)
    }
    console.log(chosenMovies)
  }

  function previous (): void {
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
        className={style.container}
      >
        <div
          className={style.categoryContainer}
        >
          <div className={style.line}></div>
          <h1 className={style.categoryName}>{categories[id].name}</h1>
          <div className={style.line}></div>
        </div>
        <div className={clsx({
          [style.containerMovies]: id < userVotesId,
          [style.containerUserVotes]: id === userVotesId
        })}>
          {categories[id].movies.map((movie, index) => (
            <button
            className={clsx({
              [style.buttonMovies]: id < userVotesId,
              [style.buttonUserVotes]: id === userVotesId
            })}
              key={index}
              onClick={async () => {
                changeStatus(index)
                changeUserVotes(index)
                await postVote(movie.titlePT, categories[id].name)
              }}
              disabled={categories[id].voted}
            >
              {id === userVotesId &&
              categories[userVotesId].size === 0
                ? (
                    ''
                  )
                : id === userVotesId
                  ? (
                <div>
                  <p className={style.choosedName}>{categoryNames[index]}</p>
                  <Card
                    title={movie.titlePT}
                    image={movie.image}
                    key={index}
                    type={categories[id].status[index]}
                    vote={
                      categories[id].voted && categories[id].status[index] === 'voted'
                        ? id === userVotesId ? 'DISABLED' : 'VOTADO'
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
                    categories[id].voted && categories[id].status[index] === 'voted'
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
            previous()
          }}
        >
          {id === 0 ? '' : '< Anterior'}
        </button>
        <p className={style.categoryText}>Categoria</p>
        <button
          className={style.categoryButton}
          onClick={() => {
            next()
          }}
        >
          {id === userVotesId - 1
            ? 'MEUS VOTOS'
            : id === userVotesId
              ? ''
              : 'Próximo >'}
        </button>
      </div>
    </div>
  )
}

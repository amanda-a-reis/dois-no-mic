import { type ReactElement, useState } from 'react'
import TopMenu from '../TopMenu/TopMenu'
import Card from './Card'
import style from '../../styles/votes/VotesPages.module.scss'
import axios from 'axios'
import { clsx } from 'clsx'

import {
  categories,
  categoriesLenght
} from '../../movies/moviesData'

interface ApiKey {
  apiKey: string
}

export default function VotesPage ({ apiKey }: ApiKey): ReactElement {
  const listDefault = Array.from({ length: categoriesLenght }, () => 'default')
  const listExcluded = Array.from({ length: categoriesLenght }, () => 'excluded')
  const listVoted = Array.from({ length: categoriesLenght }, () => 'voted')

  const [, setTypeList] = useState(listDefault)
  const [voted, setVoted] = useState(false)
  const [id, setId] = useState(0)
  const [votes, setVotes] = useState([])
  const [categoriesName, setCategoriesName] = useState([])

  const r = {
    name: 'Meus Votos',
    categories: categoriesName,
    movies: votes,
    voted: true,
    list: listVoted
  }

  const [categ, setCateg] = useState([...categories, r])

  function changeList (index: number, title: string): void {
    const list = listExcluded
    list[index] = 'voted'
    setTypeList(list)
    setVoted(true)
    const newVotes = votes
    newVotes.push(categ[id].movies[index])
    setVotes(newVotes)
    const updateCateg = categ
    updateCateg[id].voted = voted
    updateCateg[id].list = list
    updateCateg[categ.length - 1].movies = votes
    const newCategName = categoriesName
    newCategName.push(categ[id].name)
    setCategoriesName(newCategName)
    setCateg(updateCateg)
  }

  function increment (): void {
    if (id === categ.length - 1) {
      setId(categ.length - 1)
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
    const url = `http://localhost:3000/api/oscar/votes/${apiKey}`
    await axios.post(url, {
      movie,
      category
    })
  }

  return (
    <div className={style.view}>
      <TopMenu />
      <div
        className={clsx({
          [style.container]: id < categ.length - 1,
          [style.containerVotes]: id === categ.length - 1
        })}
      >
        <div
          className={style.categoryContainer}
        >
          <div className={style.line}></div>
          <h1 className={style.category}>{categ[id].name}</h1>
          <div className={style.line}></div>
        </div>
        <div className={style.movies}>
          {categ[id].movies.map((movie, index) => (
            <button
            className={clsx({
              [style.select]: id < categ.length - 1,
              [style.default]: id === categ.length - 1
            })}
              key={index}
              onClick={async () => {
                changeList(index, movie.titlePT)
                await postVote(movie.titlePT, categ[id].name)
              }}
              disabled={categ[id].voted}
            >
              {id === categ.length - 1 &&
              categ[categ.length - 1].movies.length === 0
                ? (
                    ''
                  )
                : id === categ.length - 1
                  ? (
                <div className={style.choosed}>
                  <p className={style.categorieName}>{categoriesName[index]}</p>
                  <Card
                    title={movie.titlePT}
                    image={movie.image}
                    key={index}
                    type={categ[id].list[index]}
                    vote={
                      voted && categ[id].list[index] === 'voted'
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
                  type={categ[id].list[index]}
                  vote={
                    voted && categ[id].list[index] === 'voted'
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
          {id === categ.length - 2
            ? 'MEUS VOTOS'
            : id === categ.length - 1
              ? ''
              : 'Próximo >'}
        </button>
      </div>
    </div>
  )
}

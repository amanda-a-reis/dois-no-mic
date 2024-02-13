import { useCallback, useEffect, useMemo, useState } from "react"
import { votesData, categoriesData } from "../../../movies/oscar_2024"
import useStorageVotes from "./useStorageVotes"
import { ICategory, IVote } from "../../../movies/protocols"

const useVotes = () => {
  const [votes, setVotes] = useState<IVote[]>(votesData)

  const [activeCategoryId, setActiveCategory] = useState(0)
  const [categories, setCategory] = useState<ICategory[]>(categoriesData)

  const { storageVotes, updateStorageVotes, getStorageVotes } =
    useStorageVotes()

  const _selectActiveCategory = useCallback((activeCategoryIndex: number) => {
    setActiveCategory(activeCategoryIndex)

    setCategory((prevState) => {
      const newState = [...prevState]

      newState.forEach((category, index) => {
        category.isActive = index === activeCategoryIndex
      })

      return newState
    })
  }, [])

  const _setIfCategoryHasVote = useCallback((index: number) => {
    setCategory((prevState) => {
      const newState = [...prevState]

      newState[index].hasVote = true

      return newState
    })
  }, [])

  const handleSelectMovie = useCallback(
    (movieTitle: string) => {
      setVotes((prevState) => {
        const newState = [...prevState]

        newState[activeCategoryId].selectedMovie = movieTitle

        return newState
      })

      _setIfCategoryHasVote(activeCategoryId)
    },
    [activeCategoryId, _setIfCategoryHasVote]
  )

  const handleActiveCategory = useCallback(
    (categoryLabel: string) => {
      const activeCategoryIndex = categories.findIndex(
        (category) => category.label === categoryLabel
      )

      _selectActiveCategory(activeCategoryIndex)
    },
    [categories, _selectActiveCategory]
  )

  const handleNextCategory = useCallback(() => {
    if (activeCategoryId === categories.length - 1) {
      return
    }

    const nextCategory = activeCategoryId + 1

    _selectActiveCategory(nextCategory)
  }, [activeCategoryId, categories, _selectActiveCategory])

  const data = useMemo(() => {
    const selectedMovie = storageVotes[activeCategoryId]?.selectedMovie

    return {
      movieList: votes[activeCategoryId].list,
      selectedMovie,
      categoryList: categories,
      activeCategoryLabel: categories[activeCategoryId].label
    }
  }, [activeCategoryId, votes, categories, storageVotes])

  useEffect(() => {
    if (votes[activeCategoryId].selectedMovie !== null) {
      updateStorageVotes(
        activeCategoryId,
        votes[activeCategoryId].selectedMovie
      )
    }
  }, [activeCategoryId, updateStorageVotes, getStorageVotes, votes])

  useEffect(() => {
    getStorageVotes()

    storageVotes.forEach((vote, index) => {
      if (vote.selectedMovie) {
        _setIfCategoryHasVote(index)
      }
    })
  }, [storageVotes, getStorageVotes, _setIfCategoryHasVote])

  return {
    data,
    handleSelectMovie,
    handleActiveCategory,
    handleNextCategory
  }
}

export default useVotes

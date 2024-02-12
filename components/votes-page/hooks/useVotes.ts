import { useCallback, useMemo, useState } from "react"
import { ICategory, IVote, categoryData, votesData } from "../../../movies/data"

const useVotes = () => {
  const [votes, setVotes] = useState<IVote[]>(votesData)

  const [activeCategoryId, setActiveCategory] = useState(0)
  const [categories, setCategory] = useState<ICategory[]>(categoryData)

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

  const handleSelectMovie = useCallback(
    (movieTitle: string) => {
      setVotes((prevState) => {
        const newState = [...prevState]

        newState[activeCategoryId].selectedMovie = movieTitle

        return newState
      })

      setCategory((prevState) => {
        const newState = [...prevState]

        newState[activeCategoryId].hasVote = true

        return newState
      })
    },
    [activeCategoryId]
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
    return {
      movieList: votes[activeCategoryId].list,
      selectedMovie: votes[activeCategoryId].selectedMovie,
      categoryList: categories,
      activeCategoryLabel: categories[activeCategoryId].label
    }
  }, [activeCategoryId, votes, categories])

  return {
    data,
    handleSelectMovie,
    handleActiveCategory,
    handleNextCategory
  }
}

export default useVotes

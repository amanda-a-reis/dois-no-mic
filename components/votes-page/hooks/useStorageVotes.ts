import { useCallback, useMemo, useState } from "react"
import { votesData } from "../../../movies/oscar_2024"

const useStorageVotes = () => {
  const [storageVotes, setStorageVotes] = useState([])

  const initialVotesToSaveAtLocalStorage = useMemo(() => {
    return votesData.map((vote) => ({
      selectedMovie: vote.selectedMovie,
      category: vote.category
    }))
  }, [])

  const verifyStorageVotes = useCallback(() => {
    const votesFromLocalstorage = JSON.parse(localStorage.getItem("userVotes"))

    return {
      hasStorageVotes: !!votesFromLocalstorage,
      votes: votesFromLocalstorage
    }
  }, [])

  const saveInitialVotes = useCallback(() => {
    localStorage.setItem(
      "userVotes",
      JSON.stringify(initialVotesToSaveAtLocalStorage)
    )
  }, [initialVotesToSaveAtLocalStorage])

  const updateStorageVotes = useCallback(
    (id: number, selectedMovie: string) => {
      const { hasStorageVotes, votes } = verifyStorageVotes()

      if (!hasStorageVotes) {
        saveInitialVotes()
        return
      }

      const updatedVotes = votes
      updatedVotes[id].selectedMovie = selectedMovie

      localStorage.setItem("userVotes", JSON.stringify(updatedVotes))
      setStorageVotes(updatedVotes)
    },
    [saveInitialVotes, verifyStorageVotes]
  )

  const getStorageVotes = useCallback(() => {
    const { hasStorageVotes, votes } = verifyStorageVotes()

    if (!hasStorageVotes) {
      return
    }

    setStorageVotes(votes)
  }, [verifyStorageVotes])

  const resetStorageVotes = useCallback(() => {
    localStorage.removeItem("userVotes")
  }, [])

  return {
    storageVotes,
    updateStorageVotes,
    verifyStorageVotes,
    getStorageVotes,
    saveInitialVotes,
    resetStorageVotes
  }
}

export default useStorageVotes

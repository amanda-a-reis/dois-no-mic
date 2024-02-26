"use client"

import { useCallback, useMemo, useState } from "react"
import { votesData } from "../../../movies/oscar_2024"

const useStorageVotes = () => {
  const [storageVotes, setStorageVotes] = useState([])

  const initialVotesToSaveAtLocalStorage = useMemo(() => {
    return votesData.map((vote) => ({
      selectedMovie: null,
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

      const updatedVotes = hasStorageVotes ? votes : initialVotesToSaveAtLocalStorage

      updatedVotes[id].selectedMovie = selectedMovie

      localStorage.setItem("userVotes", JSON.stringify(updatedVotes))
      setStorageVotes(updatedVotes)
    },
    [verifyStorageVotes, initialVotesToSaveAtLocalStorage]
  )

  const getStorageVotes = useCallback(() => {
    const { hasStorageVotes, votes } = verifyStorageVotes()

    if (!hasStorageVotes) {
      return
    }

    setStorageVotes(votes)
  }, [verifyStorageVotes])

  const removeStorageVotes = useCallback(() => {
    localStorage.removeItem("userVotes")
  }, [])

  return {
    storageVotes,
    updateStorageVotes,
    verifyStorageVotes,
    getStorageVotes,
    saveInitialVotes,
    removeStorageVotes
  }
}

export default useStorageVotes

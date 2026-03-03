"use client"

import { useCallback, useMemo, useState } from "react"
import { votesData } from "../../../movies/oscar_2024"

const USER_VOTES_STORAGE_KEY = "userVotes"
const USER_VOTES_STORAGE_VERSION = "2026"

type TStorageVote = {
  selectedMovie: string | null
  category: string
}

type TUserVotesStorage = {
  version: string
  votes: TStorageVote[]
}

const useStorageVotes = () => {
  const [storageVotes, setStorageVotes] = useState<TStorageVote[]>([])

  const initialVotesToSaveAtLocalStorage = useMemo(() => {
    return votesData.map((vote) => ({
      selectedMovie: null,
      category: vote.category
    }))
  }, [])

  const verifyStorageVotes = useCallback(() => {
    const votesFromLocalstorage = localStorage.getItem(USER_VOTES_STORAGE_KEY)

    if (!votesFromLocalstorage) {
      return {
        hasStorageVotes: false,
        votes: []
      }
    }

    try {
      const parsedVotes = JSON.parse(votesFromLocalstorage) as TUserVotesStorage

      const hasValidVersion = parsedVotes?.version === USER_VOTES_STORAGE_VERSION
      const hasVotesList = Array.isArray(parsedVotes?.votes)

      if (!hasValidVersion || !hasVotesList) {
        return {
          hasStorageVotes: false,
          votes: []
        }
      }

      return {
        hasStorageVotes: true,
        votes: parsedVotes.votes
      }
    } catch {
      return {
        hasStorageVotes: false,
        votes: []
      }
    }
  }, [])

  const saveInitialVotes = useCallback(() => {
    const versionedVotes: TUserVotesStorage = {
      version: USER_VOTES_STORAGE_VERSION,
      votes: initialVotesToSaveAtLocalStorage
    }

    localStorage.setItem(USER_VOTES_STORAGE_KEY, JSON.stringify(versionedVotes))
    setStorageVotes(initialVotesToSaveAtLocalStorage)
  }, [initialVotesToSaveAtLocalStorage])

  const updateStorageVotes = useCallback(
    (id: number, selectedMovie: string) => {
      const { hasStorageVotes, votes } = verifyStorageVotes()

      const baseVotes = hasStorageVotes ? votes : initialVotesToSaveAtLocalStorage
      const updatedVotes = baseVotes.map((vote) => ({ ...vote }))

      updatedVotes[id].selectedMovie = selectedMovie

      localStorage.setItem(
        USER_VOTES_STORAGE_KEY,
        JSON.stringify({
          version: USER_VOTES_STORAGE_VERSION,
          votes: updatedVotes
        } satisfies TUserVotesStorage)
      )
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
    localStorage.removeItem(USER_VOTES_STORAGE_KEY)
    setStorageVotes([])
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

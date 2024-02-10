import axios from 'axios'
import { useCallback } from 'react'
import { EnvironmentVariables } from '../../../types/IVotes'

const usePostVote = (envVars: EnvironmentVariables) => {
  const postVote = useCallback(
    async (movie: string, category: string) => {
      const { apiKey, url } = envVars

      const URL = `${url}/api/oscar/votes/${apiKey}`

      await axios.post(URL, {
        movie,
        category
      })
    },
    [envVars]
  )

  return {
    postVote
  }
}

export default usePostVote

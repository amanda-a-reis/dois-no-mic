import axios from 'axios'
import type { ReactElement } from 'react'
import HomePage from '../components/Home'

export default function Votes ({ votes }): ReactElement {
  return (
      <>
        <HomePage votes={votes}/>
      </>
  )
}

export async function getServerSideProps (): Promise<any> {
  const votes = (await axios.get(`${process.env.URL}/api/oscar/votes/${process.env.API_KEY}`)).data

  return {
    props: {
      votes
    }
  }
}

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
  const votes = await (await axios.get(`${process.env.URL}`)).data

  return {
    props: {
      votes
    }
  }
}

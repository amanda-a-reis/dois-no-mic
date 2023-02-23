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
  const config = {
    method: 'get',
    url: '/api/oscar/votes',
    baseURL: process.env.VERCEL_URL,
    proxy: {
      protocol: process.env.PROTOCOL,
      host: process.env.HOST,
      port: Number(process.env.PORT)
    }
  }
  const votes = (await axios.request(config)).data

  return {
    props: {
      votes
    }
  }
}

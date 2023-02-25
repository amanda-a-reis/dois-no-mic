import type { ReactElement } from 'react'
import VotesPage from '../components/Votes/VotesPages'
import style from '../styles/votes/votes.module.scss'

export default function Votes ({ environment }): ReactElement {
  return (
    <div className={style.container}>
      <VotesPage environment={environment}/>
    </div>
  )
}

export async function getStaticProps (): Promise<any> {
  const apiKey = process.env.API_KEY
  const url = process.env.URL

  const environment = {
    apiKey,
    url
  }

  return {
    props: {
      environment
    }
  }
}

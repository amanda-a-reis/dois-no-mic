import type { ReactElement } from 'react'
import VotesPage from '../components/Votes/VotesPages'
import style from '../styles/votes/votes.module.scss'

export default function Votes ({ apiKey }): ReactElement {
  return (
    <div className={style.container}>
      <VotesPage apiKey={apiKey}/>
    </div>
  )
}

export async function getServerSideProps (): Promise<any> {
  const apiKey = process.env.API_KEY

  return {
    props: {
      apiKey
    }
  }
}

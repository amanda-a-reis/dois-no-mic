import VotesPage from "../components/votes-page/VotesPage"

export default function Votes({ environment }) {
  return <VotesPage environment={environment}/>
}

export async function getStaticProps (): Promise<any> {
  const url = process.env.URL

  const environment = {
    url
  }

  return {
    props: {
      environment
    }
  }
}

import type { ReactElement } from 'react'

export default function HomePage ({ votes }): ReactElement {
  return (
    <ul>
      {votes.map((vote, index) => (
        <li key={index}>{vote.vote}</li>
      ))}
    </ul>
  )
}

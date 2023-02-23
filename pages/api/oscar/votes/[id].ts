import type { NextApiRequest, NextApiResponse } from 'next'
import MongoDB from '../../../../mongodb/config'
import { Votes } from '../../../../mongodb/model'
import type { Vote } from '../../../../mongodb/model'

MongoDB.instance.connect()

async function createVote (movie: string): Promise<void> {
  const newVote = new Votes({ vote: movie })
  await newVote.save()
}

async function getAllVotes (): Promise<Vote[]> {
  return await Votes.find()
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req

  const { id } = req.query

  if (id === process.env.API_KEY) {
    switch (method) {
      case 'GET': {
        const votes = await getAllVotes()
        res.status(200).json(votes)
        break
      }
      case 'POST': {
        const { vote } = req.body
        const message = `Created vote ${vote as string}`
        await createVote(vote)
        res.status(201).json({ message })
        break
      }
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
  } else {
    res.status(401).json({ message: 'Sorry, you do not have access.' })
  }
}

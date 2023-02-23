import type { NextApiRequest, NextApiResponse } from 'next'
import MongoDB from '../../../mongodb/config'
import { Votes } from '../../../mongodb/model'

MongoDB.instance.connect()

async function getVote (_id: string): Promise<any> {
  return await Votes.findOne({ _id })
}

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req

  switch (method) {
    case 'GET': {
      const { id } = req.query
      const vote = await getVote(id as string)
      res.status(200).json(vote)
      break
    }
    default:
      res.setHeader('Allow', ['GET'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

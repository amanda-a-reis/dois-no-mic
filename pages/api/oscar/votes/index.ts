import type { NextApiRequest, NextApiResponse } from "next"
import MongoDB from "../../../../mongodb/config"
import { UserVote } from "../../../../mongodb/vote"

MongoDB.instance.connect()

async function createVote(
  movie: string,
  category: string,
  savedAt: Date
): Promise<void> {
  const newVote = new UserVote({ movie, category, savedAt })
  await newVote.save()
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
): Promise<void> {
  const { method } = req
  switch (method) {
    case "POST": {
      const { movie, category }: { movie: string, category: string } = req.body
      const date = new Date()
      const message = `The vote for movie ${movie} in ${category} was saved at ${date.toLocaleString()}`
      await createVote(movie, category, date)
      res.status(201).end(message)
      break
    }
    default:
      res.setHeader("Allow", ["POST"])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

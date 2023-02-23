import mongoose from 'mongoose'

interface Vote {
  _id: mongoose.Types.ObjectId
  vote: string
}

const votesSchema = new mongoose.Schema<Vote>({
  vote: {
    type: String
  }
})

const Votes = mongoose.models.Votes as mongoose.Model<Vote> || mongoose.model('Votes', votesSchema)

export { Votes }
export type { Vote }

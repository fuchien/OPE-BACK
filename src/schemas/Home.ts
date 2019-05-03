import { Schema, model, Document } from 'mongoose'

interface HomeInterface extends Document {
  type?: string
  title1?: string
  title2?: string
  informations: {}[]
}

const HomeSchema = new Schema({
  type: String,
  title1: String,
  title2: String,
  informations: Array
}, {
  timestamps: true
})

export default model<HomeInterface>('Home', HomeSchema)

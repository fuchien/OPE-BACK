import { Schema, model, Document } from 'mongoose'

interface InformationInterface extends Document {
  type?: string
  description?: string
  title?: string
  subtitle?: string
  level?: string
  image?: string
}

const InformationSchema = new Schema({
  type: String,
  description: String,
  title: String,
  subtitle: String,
  level: String,
  image: String
}, {
  timestamps: true
})

export default model<InformationInterface>('Information', InformationSchema)

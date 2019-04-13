import { Schema, model, Document } from 'mongoose'

interface InformationInterface extends Document {
  type?: string
  text?: string
  level?: string
}

const InformationSchema = new Schema({
  type: String,
  text: String,
  level: String
}, {
  timestamps: true
})

export default model<InformationInterface>('Information', InformationSchema)

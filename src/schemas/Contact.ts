import { Schema, model, Document } from 'mongoose'

interface ContactInterface extends Document {

}

const ContactSchema = new Schema({
  title: String,
  street: String,
  city: String,
  cep: String,
  telephones: Array(String)
}, {
  timestamps: true
})

export default model<ContactInterface>('Contact', ContactSchema)

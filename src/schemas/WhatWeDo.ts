import { Schema, model, Document } from 'mongoose'

interface WhatWeDoInterface extends Document {

}

const WhatWeDoSchema = new Schema({
  title: String,
  photo: String,
  description: String
}, {
  timestamps: true
})

export default model<WhatWeDoInterface>('WhatWeDo', WhatWeDoSchema)

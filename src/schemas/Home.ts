import { Schema, model, Document } from 'mongoose'
import { IHome } from '../interface/home.interface';

interface HomeInterface extends Document, IHome {

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

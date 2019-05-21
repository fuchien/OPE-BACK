import { Request, Response } from 'express'

import Contact from '../../schemas/Contact'

class ContactController {
  public async index (req: Request, res: Response): Promise<Response> {
    const Contacts = await Contact.find()

    return res.json(Contacts)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const newContact = await Contact.create(req.body)

    return res.json(newContact)
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const contact = await Contact.findOneAndUpdate()

    return res.json(contact)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const contact = await Contact.remove({_id: req.params.id})

    return res.json(contact)
  }
}

export default new ContactController()

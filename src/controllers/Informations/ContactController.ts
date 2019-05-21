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
}

export default new ContactController()

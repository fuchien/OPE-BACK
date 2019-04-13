import { Request, Response } from 'express'

import Information from '../schemas/Information'

class InformationController {
  public async index (req: Request, res: Response): Promise<Response> {
    const Informations = await Information.find()

    return res.json(Informations)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const newInformation = await Information.create(req.body)

    return res.json(newInformation)
  }
}

export default new InformationController()

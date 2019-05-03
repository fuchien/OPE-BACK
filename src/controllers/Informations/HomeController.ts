import { Request, Response } from 'express'

import Home from '../../schemas/Home'

class HomeController {
  public async index (req: Request, res: Response): Promise<Response> {
    const Homes = await Home.find()

    return res.json(Homes)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const newHome = await Home.create(req.body)

    return res.json(newHome)
  }
}

export default new HomeController()

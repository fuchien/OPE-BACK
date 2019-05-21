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

  public async update (req: Request, res: Response): Promise<Response> {
    const home = await Home.findOneAndUpdate()

    return res.json(home)
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const home = await Home.remove({_id: req.params.id})

    return res.json(home)
  }
}

export default new HomeController()

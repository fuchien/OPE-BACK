import { Request, Response } from 'express'

import WhatWeDo from '../../schemas/WhatWeDo'

class WhatWeDoController {
  public async index (req: Request, res: Response): Promise<Response> {
    const WhatWeDos = await WhatWeDo.find().sort({createdAt: -1}).limit(4);

    return res.json(WhatWeDos)
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const newWhatWeDo = await WhatWeDo.create(req.body)

    return res.json(newWhatWeDo)
  }
}

export default new WhatWeDoController()

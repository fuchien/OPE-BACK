import { Request, Response } from 'express'

// CONTROLLERS
import HomeController from './Informations/HomeController';

// ENUM
import enumControllers from './EnumControllers';

class InformationController {
  public async index (req: Request, res: Response): Promise<Response> {
    let informations;
    if (req.body.type === enumControllers.HOME) {
      informations = await HomeController.index(req, res);
    }

    return informations
  }

  public async store (req: Request, res: Response): Promise<Response> {
    let information;
    if (req.body.type === enumControllers.HOME) {
      information = await HomeController.store(req, res);
    }

    return information
  }

  getController (type: string) {
    let controller;
    if (type === enumControllers.HOME) {
      controller = HomeController
    }
    return controller;
  }
}

export default new InformationController()

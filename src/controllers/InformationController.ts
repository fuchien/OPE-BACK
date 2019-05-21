import { Request, Response } from 'express'

// SERVICES
import InformationService from '../services/InformationService';
import InformationFactory from '../models/Informations/InformationFactory';

class InformationController {

  public async index (req: Request, res: Response): Promise<Response> {
    const cls = await InformationFactory.handlerGetControllers(req, res);
    return cls

    // return await InformationService.getControllerAllData(req, res, cls);
  }

  public async store (req: Request, res: Response): Promise<Response> {
    const information = await InformationFactory.handlerPostControllersData(req, res);

    return information
  }

  public async update (req: Request, res: Response): Promise<Response> {
    const cls = await InformationFactory.handlerUpdateControllersData(req, res);
    return cls

    // return await InformationService.getControllerAllData(req, res, cls);
  }

  public async delete (req: Request, res: Response): Promise<Response> {
    const information = await InformationFactory.handlerRemoveControllersData(req, res);

    return information
  }
}

export default new InformationController()

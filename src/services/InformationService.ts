import { Request, Response } from 'express'

// CONTROLLERS
import HomeController from '../controllers/Informations/HomeController';

// ENUM
import enumControllers from '../interface/EnumInterface';

class InformationService {

    public async getControllerAllData (req: Request, res: Response, cls: any) {
        // return new Promise(async (resolve, reject) => {
            try {
                console.log('entrou')
                return await cls.moongose.find();
            } catch (err) {
                return err
            }
        // })
    }

    public async saveControllerData (req: Request, res: Response) {
        // return new Promise(async (resolve, reject) => {
            try {
                let response;
                if (req.params.type === enumControllers.HOME) {
                    response = await HomeController.store(req, res)
                }
                return response;
            } catch (err) {
                return err
            }
        // })
    }
}

export default new InformationService()
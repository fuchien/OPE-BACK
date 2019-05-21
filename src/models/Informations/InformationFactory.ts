import EnumInterfaceController from '../../interface/EnumInterface';
import { IHome } from '../../interface/home.interface';
import { Home } from './home.model';

// CONTROLLERS
import HomeController from '../../controllers/Informations/HomeController';
import ContactController from '../../controllers/Informations/ContactController';
import WhatWeDoController from '../../controllers/Informations/WhatWeDoController';

class InformationFactory {

    public async handlerGetControllers (req, res): Promise<any> {
        if (EnumInterfaceController.HOME === req.params.type) {
            // const homeJson:IHome = req.body
            // return Home.serialize(homeJson);
            return await HomeController.index(req, res);
        }
        if (EnumInterfaceController.CONTACT === req.params.type) {
            return await ContactController.index(req, res);
        }
        if (EnumInterfaceController.WHAT_WE_DO === req.params.type) {
            return await WhatWeDoController.index(req, res);
        }
        return
    }

    public async handlerPostControllersData (req, res): Promise<any> {
        if (EnumInterfaceController.HOME === req.params.type) {
            return await HomeController.store(req, res);
        }
        if (EnumInterfaceController.CONTACT === req.params.type) {
            return await ContactController.store(req, res);
        }
        if (EnumInterfaceController.WHAT_WE_DO === req.params.type) {
            return await WhatWeDoController.store(req, res);
        }
        return
    }

    public async handlerUpdateControllersData (req, res): Promise<any> {
        if (EnumInterfaceController.HOME === req.params.type) {
            // const homeJson:IHome = req.body
            // return Home.serialize(homeJson);
            return await HomeController.update(req, res);
        }
        if (EnumInterfaceController.CONTACT === req.params.type) {
            return await ContactController.update(req, res);
        }
        if (EnumInterfaceController.WHAT_WE_DO === req.params.type) {
            return await WhatWeDoController.update(req, res);
        }
        return
    }

    public async handlerRemoveControllersData (req, res): Promise<any> {
        if (EnumInterfaceController.HOME === req.params.type) {
            return await HomeController.delete(req, res);
        }
        if (EnumInterfaceController.CONTACT === req.params.type) {
            return await ContactController.delete(req, res);
        }
        if (EnumInterfaceController.WHAT_WE_DO === req.params.type) {
            return await WhatWeDoController.delete(req, res);
        }
        return
    }

}

export default new InformationFactory()
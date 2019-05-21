import EnumInterfaceController from '../../interface/EnumInterface';
import { IHome } from '../../interface/home.interface';
import { Home } from './home.model';

// CONTROLLERS
import HomeController from '../../controllers/Informations/HomeController';
import ContactController from '../../controllers/Informations/ContactController';

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
        return
    }

    public async handlerPostControllersData (req, res): Promise<any> {
        if (EnumInterfaceController.HOME === req.params.type) {
            return await HomeController.store(req, res);
        }
        if (EnumInterfaceController.CONTACT === req.params.type) {
            return await ContactController.store(req, res);
        }
        return
    }

}

export default new InformationFactory()
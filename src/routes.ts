import { Router } from 'express'
// import validate from 'express-validation'

// CONTROLLERS
import UserController from './controllers/UserController'
import InformationController from './controllers/InformationController'

// VALIDATORS
// import InformationValidor from './validators/Information'

const routes = Router()

routes.get('/', (req, res) => res.send('Hello World'))

/********** INFORMATIONS **********/

// 
routes.get('/api/informations', InformationController.index)
routes.post('/api/informations', InformationController.store)

/* INFORMATIONS */

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes

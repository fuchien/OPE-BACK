import { Router } from 'express'
import validate from 'express-validation'

// CONTROLLERS
import UserController from './controllers/UserController'
import InformationController from './controllers/InformationController'

// VALIDATORS
import InformationValidor from './validators/Information'

const routes = Router()

routes.get('/', (req, res) => res.send('Hello World'))

// INFORMATIONS
routes.get('/informations', InformationController.index)
routes.post('/informations', validate(InformationValidor), InformationController.store)

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes

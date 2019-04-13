import { Router } from 'express'

import UserController from './controllers/UserController'
import InformationController from './controllers/InformationController'

const routes = Router()

routes.get('/', (req, res) => res.send('Hello World'))

// INFORMATIONS
routes.get('/informations', InformationController.index)
routes.post('/informations', InformationController.store)

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

export default routes

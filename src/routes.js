import { Router } from 'express';
import UserController from './app/controllers/UserController.js';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.status(200).json({ message: 'Hello World!' });
});

routes.get('/users', UserController.index);
routes.post('/users', UserController.save);

export default routes;

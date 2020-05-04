import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
    res.json('Hello world!');
});

export default routes;

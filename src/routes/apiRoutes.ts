import * as apiController from 'controllers/apiController';
import { Router } from 'express';
import { asyncMiddleware } from 'middlewares/asyncMiddleware';

const router: Router = Router();

router.get('/hello/world', apiController.helloWord);
router.get('/weather', asyncMiddleware(apiController.getWeather));
router.put('/counter', apiController.incrementsCounter);
router.get('/counter', apiController.getCounter);

export const apiRoutes: Router = router;

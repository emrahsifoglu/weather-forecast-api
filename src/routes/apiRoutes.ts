import { Router } from 'express';
import * as apiController from '../controllers/apiController';
import { asyncMiddleware } from '../middlewares/asyncMiddleware';

const router: Router = Router();

router.get('/hello/world', apiController.helloWord);
router.get('/weather', asyncMiddleware(apiController.getWeather));

export const ApiRoutes: Router = router;

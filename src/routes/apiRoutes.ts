import { Router } from 'express';
import * as apiController from '../controllers/apiController';

const router: Router = Router();

router.get('/hello/world', apiController.helloWord);

export const ApiRoutes: Router = router;

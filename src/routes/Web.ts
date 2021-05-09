import { Router } from 'express';
import HomeController from '../controller/Users';

const router = Router();

router.get('/', HomeController.index);

export default router;
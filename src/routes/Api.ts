import { Router } from 'express';
import AuthController from '../authentication/Validate';

const router = Router();

router.get('/', AuthController.index);

export default router;
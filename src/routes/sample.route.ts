import { Router } from 'express';
const router = Router();
import { sample } from '../controller/sample.controller';
 
router.get('/', sample);

export default router;
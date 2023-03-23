import { Router } from 'express';
import { supplierRoutes } from './supplier.routes';

const router = Router();

router.use('/supplier', supplierRoutes);

export { router };


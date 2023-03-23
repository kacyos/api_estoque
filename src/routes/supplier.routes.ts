import { Router } from 'express';
import { createSupplierController } from 'src/modules/supplier/useCases/createSupplier';

const supplierRoutes = Router();

supplierRoutes.post('/create', (request, response) => {
  return createSupplierController.handle(request, response);
});

export { supplierRoutes };


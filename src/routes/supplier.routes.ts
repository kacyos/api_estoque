import { Router } from 'express';
import { createSupplierController } from 'src/modules/supplier/useCases/createSupplier';
import { listSuppliersController } from 'src/modules/supplier/useCases/listSuppliers';

const supplierRoutes = Router();

supplierRoutes.post('/create', (request, response) => {
  return createSupplierController.handle(request, response);
});

supplierRoutes.get('/list', (request, response) => {
  return listSuppliersController.handle(request, response);
});

export { supplierRoutes };


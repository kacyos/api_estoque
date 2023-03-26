import { Router } from 'express';
import multer from 'multer';
import { createSupplierController } from 'src/modules/supplier/useCases/createSupplier';
import { importSuppliersController } from 'src/modules/supplier/useCases/importSuppliers';
import { listSuppliersController } from 'src/modules/supplier/useCases/listSuppliers';

const supplierRoutes = Router();
const multerConfig = multer();

supplierRoutes.post('/create', (request, response) => {
  return createSupplierController.handle(request, response);
});

supplierRoutes.get('/list', (request, response) => {
  return listSuppliersController.handle(request, response);
});

supplierRoutes.post('/import', multerConfig.single('file'), (request, response) => {
  return importSuppliersController.handle(request, response);
});

export { supplierRoutes };


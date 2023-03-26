import { SupplierRepository } from '../../repositories/implementation/SupplierRepository';
import { ImportSuppliersController } from './ImportSuppliersController';
import { ImportSuppliersUseCase } from './ImportSuppliersUseCase';

const supplierRepository = new SupplierRepository();
const importSuppliersUseCase = new ImportSuppliersUseCase(supplierRepository);
const importSuppliersController = new ImportSuppliersController(importSuppliersUseCase);

export { importSuppliersController };


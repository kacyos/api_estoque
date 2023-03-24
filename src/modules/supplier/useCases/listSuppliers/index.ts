import { SupplierRepository } from '../../repositories/implementation/SupplierRepository';
import { ListSuppliersController } from './ListSupplierController';
import { ListSuppliersUseCase } from './ListSuppliersUseCase';

const supplierRepository = new SupplierRepository();

const listSuppliersUseCase = new ListSuppliersUseCase(supplierRepository);

const listSuppliersController = new ListSuppliersController(listSuppliersUseCase);

export { listSuppliersController };


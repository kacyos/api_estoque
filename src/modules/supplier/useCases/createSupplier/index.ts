import { SupplierRepository } from '../../repositories/implementation/SupplierRepository';
import { CreateSupplierController } from './CreateSupplierController';
import { CreateSupplierUseCase } from './CreateSupplierUseCase';

const supplierRepository = new SupplierRepository();

const createSupplierUseCase = new CreateSupplierUseCase(supplierRepository);

const createSupplierController = new CreateSupplierController(createSupplierUseCase);

export { createSupplierController };


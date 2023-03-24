import { ISupplierRepository } from '../../repositories/ISupplierRepository';

export class ListSuppliersUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private supplierRepository: ISupplierRepository) {}

  async execute () {
    const suppliers = await this.supplierRepository.list();
    return suppliers;
  }
}

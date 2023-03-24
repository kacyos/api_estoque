import { ConflictError } from 'src/helpers/api-errors';
import { ISupplierRepository } from '../../repositories/ISupplierRepository';

interface IRequest {
  name: string;
  email: string;
}

export class CreateSupplierUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private supplierRepository: ISupplierRepository) {}

  async execute ({ name, email }: IRequest) {
    const supplierAlreadyExists = await this.supplierRepository.findByName(name);

    if (supplierAlreadyExists) {
      throw new ConflictError('Supplier already exists.');
    }

    const supplier = await this.supplierRepository.create({
      name,
      email
    });

    return supplier;
  }
}

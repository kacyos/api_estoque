import { BadRequestError } from 'src/helpers/api-errors';
import { ISupplierRepository } from '../../repositories/ISupplierRepository';

interface IRequest {
  name: string;
  email: string;
}

export class CreateSupplierUseCase {
  // eslint-disable-next-line no-useless-constructor
  constructor (private supplierRepository: ISupplierRepository) {}

  async execute ({ name, email }: IRequest): Promise<void> {
    const supplierAlreadyExists = await this.supplierRepository.findByName(name);

    if (supplierAlreadyExists) {
      throw new BadRequestError('Supplier already exists.');
    }

    await this.supplierRepository.create({
      name,
      email
    });
  }
}

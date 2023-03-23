import { client } from '@database/client';
import { ICreateSupplierDTO, ISupplierRepository } from '../ISupplierRepository';

export class SupplierRepository implements ISupplierRepository {
  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: SupplierRepository;

  public static getInstance (): SupplierRepository {
    if (!SupplierRepository.INSTANCE) {
      SupplierRepository.INSTANCE = new SupplierRepository();
    }

    return SupplierRepository.INSTANCE;
  }

  async create ({ name, email }: ICreateSupplierDTO) {
    const supplier = await client.supplier.create({
      data: {
        name,
        email
      }
    });

    return supplier;
  }

  async findByName (name: string): Promise<any> {
    const supplier = await client.supplier.findFirst({
      where: {
        name
      }
    });

    return supplier;
  }

  list (): Promise<any[]> {
    throw new Error('Method not implemented.');
  }
}

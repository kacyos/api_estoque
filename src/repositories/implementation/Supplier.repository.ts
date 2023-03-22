import { Supplier } from 'src/entities/Supplier.model';
import { ICreateSupplierDTO, ISupplierRepository } from '../ISupplier.repository';

export class SupplierController implements ISupplierRepository {
  create (data: ICreateSupplierDTO): Promise<Supplier> {
    const supplier = new Supplier();
    Object.assign(supplier, data);
    return supplier.save();
  }

  findByName (name: string): Promise<Supplier> {
    throw new Error('Method not implemented.');
  }

  list (): Promise<Supplier[]> {
    throw new Error('Method not implemented.');
  }
}

import { Supplier } from 'src/entities/Supplier.model';

interface ICreateSupplierDTO {
  name: string
  email: string
}

interface ISupplierRepository {
  create(data: ICreateSupplierDTO): Promise<Supplier>;
  findByName(name: string): Promise<Supplier>;
  list(): Promise<Supplier[]>;
}

export { ISupplierRepository, ICreateSupplierDTO };


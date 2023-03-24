import { Supplier } from '@prisma/client';

interface ICreateSupplierDTO {
  name: string
  email: string
}

interface ISupplierRepository {
  create({ name, email }: ICreateSupplierDTO):Promise<Supplier>;
  findByName(name: string):Promise<Supplier | null>;
  list():Promise<Supplier[]>;
}

export { ISupplierRepository, ICreateSupplierDTO };


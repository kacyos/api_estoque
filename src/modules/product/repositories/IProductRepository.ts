import { Product } from '@prisma/client';

interface ICreateProductDTO {

  internal_code: string
  name: string
  quantity: number
  type: string
  team: string
  size: string
  price: number,
  supplier_id: string
}

interface IUpdateProductDTO {
  internal_code?: string
  name?: string
  quantity?: number
  type?: string
  team?: string
  size?: string
  price?: number,
}

interface IProductRepository {
  create({
    internal_code, name, quantity,
    type, team, size, price, supplier_id
  }: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product | null>;
  findByInternalCode(internal_code: string): Promise<Product | null>;
  update(id: string, { ...product }:IUpdateProductDTO): Promise<Product>;
  list(): Promise<Product[]>;

}

export { IProductRepository, ICreateProductDTO };


/* eslint-disable camelcase */
import { client } from '@database/client';
import { Product } from '@prisma/client';

import { ICreateProductDTO, IProductRepository } from '../IProductRepository';

export class ProductRepository implements IProductRepository {
  public static getInstance (): ProductRepository {
    if (!ProductRepository.INSTANCE) {
      ProductRepository.INSTANCE = new ProductRepository();
    }

    return ProductRepository.INSTANCE;
  }

  create ({ internal_code, name, quantity, type, team, size, price, supplier_id }: ICreateProductDTO): Promise<Product> {
    const product = client.product.create({
      data: {
        internal_code,
        name,
        quantity,
        type,
        team,
        size,
        price,
        supplier_id
      }
    });

    return product;
  }

  update (id: string, { ...product }: ICreateProductDTO): Promise<Product> {
    const updatedProduct = client.product.update({
      where: { id },
      data: {
        ...product
      }
    });

    return updatedProduct;
  }

  async findByName (name: string): Promise<Product | null> {
    const product = await client.product.findFirst({
      where: { name }
    });

    return product;
  }

  async findByInternalCode (internal_code: string): Promise<Product | null> {
    const product = await client.product.findFirst({
      where: { internal_code }
    });

    return product;
  }

  list (): Promise<Product[]> {
    throw new Error('Method not implemented.');
  }

  // eslint-disable-next-line no-use-before-define
  private static INSTANCE: ProductRepository;
}

import csvParser from 'csv-parser';
import { ApiError } from 'src/helpers/api-errors';
import { SupplierRepository } from 'src/modules/supplier/repositories/implementation/SupplierRepository';
import { Readable } from 'stream';
import { ProductRepository } from '../../repositories/implementation/ProductRepository';

interface IRequest {
  internal_code: string
  name: string
  quantity: number
  type: string
  team: string
  size: string
  price: number
  supplier_id: string
  supplier: string
}

export class ImportProductsUseCase {
  // eslint-disable-next-line no-undef
  loadProductsFromCSVFile (file: Express.Multer.File | undefined): Promise<IRequest[]> {
    return new Promise((resolve, reject) => {
      const suppliers: IRequest[] = [];
      const buffer = file?.buffer;
      const readableFile = new Readable();

      readableFile.push(buffer?.toString('latin1'));
      readableFile.push(null);

      readableFile.pipe(csvParser({
        separator: ',',
        skipLines: 1,
        headers: ['internal_code', 'cod_interno', 'cod_bar', 'name', 'size', 'qtd.min', 'quantity', 'price', 'supplier', 'team', 'type'],
        mapValues: ({ value }) => value.toLowerCase()

      }))
        .on('data', (data) => suppliers.push(data))
        .on('end', () => resolve(suppliers))
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly productRepository: ProductRepository,
    private readonly supplierRepository: SupplierRepository) { }

  // eslint-disable-next-line no-undef
  async execute (file: Express.Multer.File | undefined): Promise<void> {
    const products = await this.loadProductsFromCSVFile(file);
    const productsWithoutRegisteredSupplier: IRequest[] = [];

    for (const product of products) {
      const supplierAlreadyExists = await this.supplierRepository.findByName(product.supplier);
      const productAlreadyExists = await this.productRepository.findByName(product.internal_code);

      if (supplierAlreadyExists && !productAlreadyExists?.id) {
        await this.productRepository.create({
          internal_code: product.internal_code,
          name: product.name,
          quantity: product.quantity,
          type: product.type,
          team: product.team,
          size: product.size,
          price: product.price,
          supplier_id: supplierAlreadyExists.id
        });
      } else if (productAlreadyExists) {
        await this.productRepository.update(productAlreadyExists.id, {
          ...product
        });
      } else {
        productsWithoutRegisteredSupplier.push(product);
      }
    }

    if (productsWithoutRegisteredSupplier.length > 0) {
      throw new ApiError('Exists products without registered supplier.', 400, productsWithoutRegisteredSupplier);
    }
  }
}


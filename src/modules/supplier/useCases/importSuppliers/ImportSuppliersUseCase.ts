import csvParser from 'csv-parser';
import { ApiError } from 'src/helpers/api-errors';
import { Readable } from 'stream';
import { SupplierRepository } from '../../repositories/implementation/SupplierRepository';

interface IRequest {
  name: string;
}

export class ImportSuppliersUseCase {
  // eslint-disable-next-line no-undef
  loadSuppliersFromCSVFile (file: Express.Multer.File | undefined): Promise<IRequest[]> {
    return new Promise((resolve, reject) => {
      const suppliers: IRequest[] = [];
      const buffer = file?.buffer;
      const readableFile = new Readable();

      readableFile.push(buffer?.toString('latin1'));
      readableFile.push(null);

      readableFile.pipe(csvParser({
        separator: ',',
        skipLines: 1,
        headers: ['name'],
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
  constructor (private readonly supplierRepository: SupplierRepository) { }

  // eslint-disable-next-line no-undef
  async execute (file: Express.Multer.File | undefined): Promise<void> {
    const suppliers = await this.loadSuppliersFromCSVFile(file);
    const notImportedSuppliers: IRequest[] = [];

    for (const supplier of suppliers) {
      const supplierAlreadyExists = await this.supplierRepository.findByName(supplier.name);
      if (!supplierAlreadyExists) {
        await this.supplierRepository.create(supplier);
      } else {
        notImportedSuppliers.push(supplier);
      }
    }

    if (notImportedSuppliers.length > 0) {
      throw new ApiError('Supplier already exists.', 409, notImportedSuppliers);
    }
  }
}


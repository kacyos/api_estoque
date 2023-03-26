import { Request, Response } from 'express';
import { ImportSuppliersUseCase } from './ImportSuppliersUseCase';

export class ImportSuppliersController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly importSuppliersUseCase: ImportSuppliersUseCase) {}

  async handle (req: Request, res: Response) {
    const { file } = req;
    const impor = await this.importSuppliersUseCase.execute(file);
    console.log('impor', impor);
    return res.status(201).json({ impor });
  }
}

import { Request, Response } from 'express';
import { ListSuppliersUseCase } from './ListSuppliersUseCase';

export class ListSuppliersController {
  // eslint-disable-next-line no-useless-constructor, no-undef
  constructor (private listSuppliers: ListSuppliersUseCase) {}

  async handle (req: Request, res: Response) {
    const suppliers = await this.listSuppliers.execute();

    return res.json(suppliers);
  }
}

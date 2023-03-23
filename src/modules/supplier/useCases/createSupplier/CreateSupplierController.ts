import { Request, Response } from 'express';
import { CreateSupplierUseCase } from './CreateSupplierUseCase';

export class CreateSupplierController {
  // eslint-disable-next-line no-useless-constructor
  constructor (private readonly createSupplier: CreateSupplierUseCase) {}

  async handle (req: Request, res: Response): Promise<Response> {
    const { name, email } = req.body;

    const supplier = await this.createSupplier.execute({ name, email });

    return res.status(201).json(supplier);
  }
}

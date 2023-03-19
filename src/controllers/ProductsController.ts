import { Product } from "@models/Product";

export class ProductController{
  constructor() {
    const product = new Product()
  }
  public execute() {
    return ['a', 'b', 'c'];}
}
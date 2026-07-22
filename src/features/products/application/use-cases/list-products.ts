import type { Product } from "../../domain/entities/product";
import type { ProductRepository } from "../../domain/repositories/product.repository";

export class ListProducts {
  constructor(private readonly repository: ProductRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.repository.list();
    return products;
  }
}

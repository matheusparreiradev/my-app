import type { Product } from "../../domain/entities/product";
import type { ProductRepository } from "../../domain/repositories/product.repository";

export class FindProductById {
  constructor(private readonly repository: ProductRepository) {}

  async execute(id: string): Promise<Product | null> {
    return this.repository.findById(id);
  }
}

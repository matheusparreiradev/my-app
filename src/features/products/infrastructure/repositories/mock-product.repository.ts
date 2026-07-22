import type { Product } from "../../domain/entities/product";
import type { ProductRepository } from "../../domain/repositories/product.repository";
import { PRODUCTS_MOCK } from "../mocks/products.mock";

export class MockProductRepository implements ProductRepository {
  async list(): Promise<Product[]> {
    return PRODUCTS_MOCK;
  }

  async findById(id: string): Promise<Product | null> {
    return PRODUCTS_MOCK.find((product) => product.id === id) ?? null;
  }
}

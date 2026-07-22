// API pública da feature products
export type { Product, ProductCategory } from "./domain/entities/product";
export type { ProductRepository } from "./domain/repositories/product.repository";
export { ListProducts } from "./application/use-cases/list-products";
export { FindProductById } from "./application/use-cases/find-product-by-id";
export { makeProductRepository } from "./infrastructure";
export { CATEGORIES, POPULAR_FILTERS } from "./presentation/constants";
export type { CategoryItem, PopularFilter } from "./presentation/constants";

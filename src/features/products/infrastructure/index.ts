import { MockProductRepository } from "./repositories/mock-product.repository";

// Trocar para HttpProductRepository quando a API estiver disponível.
// export { HttpProductRepository } from "./repositories/http-product.repository";

export const makeProductRepository = () => {
  return new MockProductRepository();
};

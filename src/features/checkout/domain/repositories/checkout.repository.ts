import type { Checkout } from "../entities/checkout";

export interface CheckoutRepository {
  create(): Promise<Checkout>;
}

import type { Checkout } from "../../domain/entities/checkout";
import type { CheckoutRepository } from "../../domain/repositories/checkout.repository";

export class VoidCheckoutRepository implements CheckoutRepository {
  async create(): Promise<Checkout> {
    return { id: "" };
  }
}

import type { CheckoutRepository } from "../../domain/repositories/checkout.repository";

export class CreateCheckout {
  constructor(private readonly repository: CheckoutRepository) {}

  async execute(): Promise<void> {
    await this.repository.create();
  }
}

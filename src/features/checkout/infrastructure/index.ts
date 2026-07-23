import { VoidCheckoutRepository } from "./repositories/void-checkout.repository";

export const makeCheckoutRepository = () => {
  return new VoidCheckoutRepository();
};

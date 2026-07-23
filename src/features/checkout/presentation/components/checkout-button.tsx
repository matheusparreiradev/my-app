"use client";

import { Button } from "@/shared/ui/button";
import { useCheckout } from "@/features/products/presentation/hooks/useCheckout";

type CheckoutButtonProps = {
  inStock?: boolean;
};

export function CheckoutButton({ inStock }: CheckoutButtonProps) {
  const { handleBuy } = useCheckout();

  return (
    <Button
      as="button"
      disabled={!inStock}
      onClick={handleBuy}
      aria-disabled={!inStock}
    >
      {inStock ? "Proceed to Checkout" : "Out of Stock"}
    </Button>
  );
}

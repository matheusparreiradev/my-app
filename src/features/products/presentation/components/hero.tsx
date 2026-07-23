"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import type { Product } from "../../domain/entities/product";
import { Button } from "../../../../shared/ui/button";
import { SliderDots } from "../../../../shared/ui/slider-dots";


type HeroProps = {
  products: Product[];
};

export function Hero({ products }: HeroProps) {
  const router = useRouter();
  const [active, setActive] = useState(0);
  const product = products[active];

  if (!product) return null;

  const hasDiscount = Boolean(
    product.originalPrice && product.originalPrice > product.price
  );
  const discountPercent = hasDiscount
    ? Math.round(
      ((product.originalPrice! - product.price) / product.originalPrice!) * 100
    )
    : 0;

    const handleCheckout = (productId: string) => {
      //caso precise passar cupon, variation id relacionado ao produto exibido no slide promocional.
      const params = new URLSearchParams({
        productId: productId,
      });
      console.log("params", params.toString());
      router.push(`/checkout?${params.toString()}`);
    };
  
  return (
    <section className="relative flex w-full min-h-[80vh] items-center justify-center overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-12 px-6 py-16 md:flex-row md:items-center md:gap-20 md:py-20">
        <div
          key={product.id}
          className="flex flex-1 flex-col items-center gap-8 text-center md:items-start md:text-left"
        >
          <h1 className="text-4xl font-bold leading-tight  text-wrap text-secondary  md:text-5xl">
            {product.name}
          </h1>

          <div className="flex flex-wrap justify-center gap-3 pt-2 md:justify-start">
            <Button variant="primary" onClick={() => handleCheckout(product.id)}>
              Comprar agora
            </Button>
            <Button as="a" href="#categorias" variant="outline">
              Ver detalhes
            </Button>
          </div>
          {products.length > 1 && (
            <div className="ml-[106px] flex md:justify-start">
              <SliderDots
                total={products.length}
                active={active}
                onSelect={setActive}
              />
            </div>
          )}
        </div>

        <div className="relative flex flex-1 items-center justify-center">
          <div className="relative">
            {product.imageUrl && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={product.id}
                src={product.imageUrl}
                alt={product.name}
                className="h-auto max-h-[356px] w-full max-w-[331px] object-contain"
              />
            )}
            {hasDiscount && (
              <div className="absolute bottom-4 -right-4 grid h-[115px] w-[120px] place-items-center rounded-[674px] bg-warning-500 text-center text-white shadow-lg md:bottom-[52px] md:-right-[31px]">
                <div className="flex flex-col gap-[13.5px]">
                  <p className="text-[10px] font-semibold uppercase">Economize</p>
                  <p className="text-xl font-bold leading-none">{discountPercent}%</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
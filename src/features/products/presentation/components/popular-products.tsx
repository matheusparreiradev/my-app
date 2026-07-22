import type { Product } from "../../domain/entities/product";
import { POPULAR_FILTERS } from "../constants";
import { ProductCard } from "./product-card";

type PopularProductsProps = {
  products: Product[];
};

export function PopularProducts({ products }: PopularProductsProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-default-800">Produtos populares</h2>

        <div className="hidden gap-1 rounded-full bg-default-100 p-1 sm:flex">
          {POPULAR_FILTERS.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={
                "rounded-full px-3 py-1 text-xs font-medium transition " +
                (index === 0
                  ? "bg-white text-default-900 shadow-sm"
                  : "text-default-500 hover:text-default-800")
              }
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

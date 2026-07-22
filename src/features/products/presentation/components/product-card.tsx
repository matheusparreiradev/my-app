import type { Product } from "../../domain/entities/product";

type ProductCardProps = {
  product: Product;
};

const formatPrice = (value: number) =>
  value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function ProductCard({ product }: ProductCardProps) {
  const hasImage = Boolean(product.imageUrl);

  return (
    <article className="group flex flex-col rounded-2xl border border-default-200 bg-white p-4 transition hover:shadow-md">
      <div className="relative mb-3 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-default-100">
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover transition group-hover:scale-105"
          />
        ) : (
          <span className="text-4xl">📦</span>
        )}
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="absolute left-2 top-2 rounded-full bg-warning-500 px-2 py-0.5 text-xs font-semibold text-white">
            -
            {Math.round(
              ((product.originalPrice - product.price) / product.originalPrice) * 100,
            )}
            %
          </span>
        )}
      </div>

      <h3 className="line-clamp-1 text-sm font-medium text-default-700">
        {product.name}
      </h3>

      <div className="mt-1 flex items-baseline gap-2">
        <span className="text-base font-semibold text-default-900">
          {formatPrice(product.price)}
        </span>
        {product.originalPrice && product.originalPrice > product.price && (
          <span className="text-xs text-default-400 line-through">
            {formatPrice(product.originalPrice)}
          </span>
        )}
      </div>
    </article>
  );
}

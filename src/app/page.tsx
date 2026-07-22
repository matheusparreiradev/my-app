import {
  ListProducts,
  makeProductRepository,
} from "../features/products";
import { Hero } from "../features/products/presentation/components/hero";
import { CategoriesSection } from "../features/products/presentation/components/categories-section";
import { PopularProducts } from "../features/products/presentation/components/popular-products";

export default async function Home() {
  const repository = makeProductRepository();
  const listProducts = new ListProducts(repository);
  const products = await listProducts.execute();

  const featured =
    products.filter((product) => product.featured).length > 0
      ? products.filter((product) => product.featured)
      : products.slice(0, 3);
  const popular = products.filter(
    (product) => !featured.some((f) => f.id === product.id)
  );

  return (
    <main>
      <Hero products={featured} />
      <CategoriesSection />
      <PopularProducts products={popular} />
    </main>
  );
}

import type { ProductCategory } from "../domain/entities/product";

export type CategoryItem = {
  id: ProductCategory;
  label: string;
  icon: string;
};

export const CATEGORIES: CategoryItem[] = [
  { id: "audio", label: "Caixa de som", icon: "🔊" },
  { id: "computers", label: "Desktop & laptop", icon: "💻" },
  { id: "cameras", label: "DSLR cameras", icon: "📷" },
  { id: "tablets", label: "Tablet", icon: "📱" },
];

export const POPULAR_FILTERS = ["Top sells", "Top rated", "New", "Trending"] as const;
export type PopularFilter = (typeof POPULAR_FILTERS)[number];

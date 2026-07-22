import { CATEGORIES, type CategoryItem } from "../constants";

type CategoriesSectionProps = {
  title?: string;
};

export function CategoriesSection({ title = "Categorias em alta" }: CategoriesSectionProps) {
  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-10">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-default-800">{title}</h2>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {CATEGORIES.map((category) => (
          <CategoryPill key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}

function CategoryPill({ category }: { category: CategoryItem }) {
  return (
    <a
      href="#"
      className="flex items-center gap-3 rounded-2xl border border-default-200 bg-white px-4 py-3 transition hover:border-warning-400 hover:shadow-sm"
    >
      <span className="grid h-10 w-10 place-items-center rounded-xl bg-warning-50 text-xl">
        {category.icon}
      </span>
      <span className="text-sm font-medium text-default-700">{category.label}</span>
    </a>
  );
}

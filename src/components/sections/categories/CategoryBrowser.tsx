import { CategoryCard } from '@/components/cards';

import { categories } from '@/data/category';

export function CategoryBrowser() {
  return (
    <div className="mb-10">
      <h3 className="my-5 text-center uppercase">Browse by category</h3>
      <div className="max-w-[350px]">
        <CategoryCard category={categories[0]} />
      </div>
    </div>
  );
}

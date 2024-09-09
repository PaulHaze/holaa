import { CategoryCard } from '@/components/cards';

import { categories } from '@/data/category';

export function CategoryBrowser() {
  return (
    <div>
      <h3 className="my-5 text-center uppercase">Browse by category</h3>
      <CategoryCard category={categories[0]} />
    </div>
  );
}

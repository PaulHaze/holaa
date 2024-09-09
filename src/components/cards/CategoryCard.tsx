import Image from 'next/image';
import Link from 'next/link';

import { RxArrowRight } from 'react-icons/rx';

type Props = {
  category: Category;
};

export function CategoryCard({ category }: Props) {
  return (
    <div className="category-card group">
      <div className="thumbnail">
        <Image
          src={category.image}
          alt="category"
          className="thumb-img w-full"
        />
      </div>
      <div className="details">
        <h4 className="uppercase">{category.title}</h4>
        <Link
          href={category.href}
          className="rounded-full border border-stone-600 p-3 transition-all group-hover:bg-gradient-color"
        >
          <RxArrowRight size={32} />
        </Link>
      </div>
    </div>
  );
}

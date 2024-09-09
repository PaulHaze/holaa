import Image from 'next/image';
import Link from 'next/link';

import { RxArrowRight } from 'react-icons/rx';

type Props = {
  category: Category;
};

export function CategoryCard({ category }: Props) {
  return (
    <div className="w-full flex-center">
      <div className="category-card group w-[95%] sm:w-full">
        <div className="mb-6 overflow-hidden rounded-[15px]">
          <Image
            src={category.image}
            alt="category image"
            className="w-full transition-transform duration-300 ease-out group-hover:scale-110"
          />
        </div>
        <div className="relative z-10 flex items-center justify-between">
          <h4 className="uppercase">{category.title}</h4>
          <Link
            href={category.href}
            className="rounded-full border border-stone-600 p-3 transition-all duration-1000 group-hover:bg-gradient-color"
          >
            <RxArrowRight size={32} />
          </Link>
        </div>
      </div>
    </div>
  );
}

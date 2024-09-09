'use client';

import { useParams } from 'next/navigation';
import { HeaderOne } from '@/components/sections';

import { convertSlugToTitle } from '@/utils';

// type Props = {
//   params: {
//     movie: string;
//   };
// };

export default function Category() {
  const { category } = useParams();
  return (
    <main>
      <HeaderOne isHero={false} data={null} />
      <div className="h-screen w-full flex-center">
        <h1 className="my-5">
          CATEGORY SELECTED: {convertSlugToTitle(category as string)}
        </h1>
      </div>
    </main>
  );
}

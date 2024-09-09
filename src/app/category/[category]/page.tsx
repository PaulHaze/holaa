'use client';

import { useSearchParams } from 'next/navigation';

import { HeaderOne } from '@/components/sections';

// type Props = {
//   params: {
//     movie: string;
//   };
// };

export default function Category() {
  const searchParams = useSearchParams();
  const category = searchParams.get('cat');
  return (
    <main>
      <HeaderOne isHero={false} data={null} />
      <div className="h-screen w-full flex-center">
        <h1 className="my-5">CATEGORY SELECTED: {category}</h1>
      </div>
    </main>
  );
}

'use client';

import { useSearchParams } from 'next/navigation';

import { HeaderOne } from '@/components/sections/header';

// type Props = {
//   params: {
//     movie: string;
//   };
// };

export default function TrendingMovieDetails() {
  const searchParams = useSearchParams();
  const movieTitle = searchParams.get('movie');
  return (
    <main>
      <HeaderOne isHero={false} data={null} />
      <div className="h-screen w-full flex-center">
        <h1 className="my-5">MOVIE SELECTED: {movieTitle}</h1>
      </div>
    </main>
  );
}

'use client';

import { useParams } from 'next/navigation';

import { HeaderOne } from '@/components/sections';

import { convertSlugToTitle } from '@/utils';

// type Props = {
//   params: {
//     movie: string;
//   };
// };

export default function TrendingMovieDetails() {
  const { movie } = useParams();
  const movieTitle = convertSlugToTitle(movie as string);

  return (
    <main>
      <HeaderOne isHero={false} data={null} />
      <div className="h-screen w-full flex-center">
        <h1 className="my-5">MOVIE SELECTED: {movieTitle}</h1>
      </div>
    </main>
  );
}

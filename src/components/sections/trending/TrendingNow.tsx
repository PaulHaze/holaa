import { MovieCard } from '@/components/cards';

import { IoMdTrendingUp } from 'react-icons/io';

export function TrendingNow() {
  return (
    <div className="mt-10 w-full md:mt-20">
      <h3 className="text-center font-heading">
        <span className="relative top-2 mr-2 inline-flex">
          <IoMdTrendingUp />
        </span>
        TRENDING NOW
      </h3>
      <div className="mt-5 flex-center">
        <div className="w-[420px]">
          <MovieCard />
        </div>
      </div>
    </div>
  );
}

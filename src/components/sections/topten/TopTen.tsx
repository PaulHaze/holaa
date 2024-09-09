'use client';

import { MovieCard } from '@/components/cards';

// import { Swiper, SwiperSlide } from 'swiper/react';
// import type { SwiperOptions } from 'swiper/types';

import { popularMoviesData } from '@/data/movie';

export function TopTen() {
  return (
    <div className="pt-14">
      <h2 className="text-center">Top Ten Shows: AUSTRALIA</h2>
      <div className="top-ten">
        <MovieCard movie={popularMoviesData[0]} />
      </div>
    </div>
  );
}

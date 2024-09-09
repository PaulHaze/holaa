'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

import { MovieCard } from '@/components/cards';

import { popularMoviesData as movies } from '@/data/movie';

export function TopTen() {
  const topTenSwiperOptions: SwiperOptions = {
    speed: 12000,
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 1.2,
      },
      576: {
        slidesPerView: 1.7,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      1366: {
        slidesPerView: 3.5,
        spaceBetween: 30,
      },
      1600: {
        slidesPerView: 3.9,
        spaceBetween: 30,
      },
    },
  };
  return (
    <div className="px-2 py-14 md:px-8">
      <h2 className="mb-10 text-center">Top Ten Shows: AUSTRALIA</h2>
      <div className="top-ten">
        {movies.length && (
          <Swiper {...topTenSwiperOptions} className="swiper">
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

'use client';

import { SwiperSlide, Swiper } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';

import { MovieCard } from '@/components/cards';

import { IoMdTrendingUp } from 'react-icons/io';

import { trendingOneMoviesData as movies } from '@/data/movie';

export function TrendingNow() {
  const trendingMoviesSwiperOptions: SwiperOptions = {
    speed: 9000,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1.3,
      },
      576: {
        slidesPerView: 1.7,
        spaceBetween: 5,
      },
      992: {
        slidesPerView: 2.5,
        spaceBetween: 15,
      },
      1366: {
        slidesPerView: 3.5,
        spaceBetween: 5,
      },
      1600: {
        slidesPerView: 3.9,
        spaceBetween: 5,
      },
    },
    modules: [Navigation, FreeMode, Autoplay],
  };
  return (
    <div className="mb-20 mt-10 w-full md:mt-20">
      <h2 className="mb-4 text-center font-heading">
        <span className="relative top-2 mr-2 inline-flex">
          <IoMdTrendingUp className="text-orange" />
        </span>
        TRENDING NOW
      </h2>
      <div className="mt-5 w-full flex-center">
        {movies?.length && (
          <Swiper {...trendingMoviesSwiperOptions} className="swiper">
            {movies.map((movie: MovieCard, index) => (
              <SwiperSlide className="flex-center" key={index}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

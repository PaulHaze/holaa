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
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    modules: [Navigation, FreeMode],
  };
  return (
    <div className="mt-10 w-full md:mt-20">
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

/* 

        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
*/

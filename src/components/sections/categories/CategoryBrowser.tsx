'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { CategoryCard } from '@/components/cards';

import { categories } from '@/data/category';

export function CategoryBrowser() {
  const swiperOptions = {
    speed: 5000,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 1,
      pauseOnMouseEnter: true,
    },
    modules: [Autoplay],
    breakpoints: {
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
      1500: { slidesPerView: 5 },
      1700: { slidesPerView: 6, spaceBetween: 30 },
    },
  };
  return (
    <div className="mb-10">
      <h3 className="my-5 text-center uppercase">Browse by category</h3>
      {categories.length && (
        <Swiper {...swiperOptions} className="swiper categories-slider">
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <CategoryCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

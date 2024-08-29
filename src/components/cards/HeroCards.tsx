'use client';

import Image from 'next/image';

import { SwiperSlide, Swiper } from 'swiper/react';
import type { SwiperProps } from 'swiper/react';

import { Navigation, Pagination, EffectCards, Scrollbar } from 'swiper/modules';

type HeroCardsProps = {
  data?: Array<any>;
};

export const HeroCards = ({ data }: HeroCardsProps) => {
  const swiperHeroCardOptions: SwiperProps = {
    speed: 500,
    effect: 'cards',
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    modules: [Pagination, Navigation, EffectCards, Scrollbar],
  };

  return (
    <div className="hero-card-slider">
      <Swiper
        {...swiperHeroCardOptions}
        className="swiper hero-card-slider-wrap"
      >
        {data?.map((cardSlide, key) => (
          <SwiperSlide
            key={key}
            className="hero-movie-card swiper-slide text-center"
          >
            <div className="thumb">
              <Image src={cardSlide.image} alt="card-img" />
            </div>
            <div className="content mt-3">
              <h3 className="card-title">{cardSlide.title}</h3>
              <p className="card-description">{cardSlide.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

/* 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperCards = ({ cards }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="rounded-lg shadow-lg"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600">{card.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCards;
*/

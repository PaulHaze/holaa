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
    grabCursor: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    modules: [Pagination, Navigation, EffectCards, Scrollbar],
  };

  return (
    <div className="card-container flex">
      <Swiper {...swiperHeroCardOptions}>
        {data?.map((cardSlide, key) => (
          <SwiperSlide key={key} className="">
            <Image src={cardSlide.image} alt="card-img" />
          </SwiperSlide>
        ))}
        <div className="invisible absolute bottom-0 right-[-85px] lg:visible">
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
  );
};

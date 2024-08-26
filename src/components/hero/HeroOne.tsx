'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { SwiperSlide, Swiper } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import { InfoPill } from '@/components/ui';
import { IoPlay } from 'react-icons/io5';

import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
  Scrollbar,
} from 'swiper/modules';

import { heroOneData as data } from '@/data/hero';

const VideoTwo = dynamic(
  async () => {
    const mod = await import('@/components/video/VideoTwo');
    return mod.VideoTwo;
  },
  {
    ssr: false,
  },
);

export function HeroOne() {
  const swiperHeroOptions: SwiperOptions = {
    speed: 1500,
    slidesPerView: 'auto',
    initialSlide: 1,
    spaceBetween: '-70',
    centeredSlides: true,
    slideToClickedSlide: true,
    // clickable: true,
    allowTouchMove: true,
    loop: true,
    autoplay: false,
    navigation: {
      prevEl: '.prev-slide',
      nextEl: '.next-slide',
    },

    // onAutoplayTimeLeft(
    //   swiper: typeof Swiper,
    //   time: number,
    //   progress: number,
    // ): void {
    //   const progressCircle =
    //     document.querySelector<HTMLElement>('.linear-circle');
    //   if (progressCircle) {
    //     progressCircle.style.setProperty('--progress', String(1 - progress));
    //   }
    // },
    modules: [Autoplay, Pagination, Navigation],
  };

  // const swiperHeroCardOptions = {
  //   speed: 500,
  //   effect: 'cards',
  //   rotate: 'false',
  //   pagination: {
  //     el: '.swiper-pagination',
  //     type: 'fraction',
  //   },
  //   modules: [Pagination, Navigation, EffectCards, Scrollbar],
  // };

  return (
    <>
      {data.slides?.length && (
        <Swiper {...swiperHeroOptions} className="swiper hero-slider-one">
          {data.slides?.map((slide, index) => (
            <SwiperSlide
              key={index}
              className="home-one-slider swiper-slide relative h-auto md:h-[80vh]"
            >
              <Image
                src={slide.image}
                alt="image"
                className="absolute top-0 h-full w-full overflow-hidden object-cover"
              />

              {/* <div className="thumb">
                <Image src={slide.image} alt="card-img" className="" />
              </div> */}

              <div className="absolute bottom-10 z-10 w-full md:bottom-20">
                <div className="flex flex-col items-center space-y-5 md:items-start md:pl-10">
                  {/* INFO PILLS */}
                  <div className="flex w-[80%] max-w-[450px] flex-grow justify-between gap-2 sm:gap-3">
                    <InfoPill type="score" text={`${slide.rating} Reviews`} />
                    <InfoPill type="duration" text={slide.duration} />
                    <InfoPill
                      type="quality"
                      text={`${slide.quality} Quality`}
                    />
                  </div>

                  {/* TEXT */}
                  <div className="flex flex-col items-center gap-1 px-10 pb-2 pt-5 md:items-start md:px-0">
                    <h2 className="font-heading font-semibold md:text-7xl">
                      {slide.title}
                    </h2>
                    <p className="text-center font-body text-lg opacity-80 md:w-[80%] md:text-left md:text-xl">
                      {slide.description}
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-4">
                    <Link
                      href="movie-details"
                      className="hl-btn btn-base uppercase"
                    >
                      <IoPlay />
                      <span>{slide.btnOneText}</span>
                    </Link>
                    <VideoTwo
                      title={slide.btnTwoText}
                      src="assets/video/video.mp4"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

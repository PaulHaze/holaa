'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { SwiperSlide, Swiper } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import { InfoPill } from '@/components/ui';
import { IoPlay } from 'react-icons/io5';
import { HiArrowLongRight, HiArrowLongLeft } from 'react-icons/hi2';

import { cn } from '@/utils';

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
    spaceBetween: -70,
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
              className="home-one-slider swiper-slide relative"
            >
              <Image
                src={slide.image}
                alt="image"
                className="absolute top-0 h-full w-full object-cover"
              />

              {/* CONTENT */}
              <div className="absolute bottom-10 z-10 w-full">
                <div className="flex flex-col items-center space-y-2 md:items-start md:pl-10">
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
                  <div className="flex flex-col items-center px-10 pb-6 pt-5 md:items-start md:px-0">
                    <h2 className="font-heading font-semibold md:text-7xl">
                      {slide.title}
                    </h2>
                    <p className="text-center font-body text-lg opacity-80 md:w-[80%] md:text-left md:text-xl">
                      {slide.description}
                    </p>
                  </div>

                  {/* BUTTONS */}
                  <div className="flex items-center gap-4 md:w-full md:justify-between">
                    <div className="space-x-4 md:space-x-5">
                      <Link
                        href="movie-details"
                        className={cn('hl-btn btn-base py-5 uppercase')}
                      >
                        <IoPlay className="" size={22} />
                        <span className="font-body font-semibold">
                          {slide.btnOneText}
                        </span>
                      </Link>
                      <VideoTwo
                        title={slide.btnTwoText}
                        src="assets/video/video.mp4"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {/* SLIDER BUTTONS */}
      <div className="relative z-9999 -mt-20 hidden justify-end pr-10 md:flex xl:pr-40">
        <div className="flex gap-5">
          <HiArrowLongLeft
            size={40}
            className="prev-slide cursor-pointer transition-all duration-300 hover:text-orange"
          />
          <HiArrowLongRight
            className="next-slide cursor-pointer transition-all duration-300 hover:text-orange"
            size={40}
          />
        </div>
      </div>
    </>
  );
}

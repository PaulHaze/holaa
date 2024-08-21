'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { SwiperSlide, Swiper } from 'swiper/react';
import type { SwiperOptions } from 'swiper/types';

import { InfoPill } from '@/components/ui';

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
              className="home-one-slider swiper-slide relative h-auto"
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
                <div className="flex flex-col items-center space-y-5 md:flex md:items-start md:pl-10">
                  <div className="flex w-[80%] max-w-[450px] flex-grow justify-between gap-2 sm:gap-3">
                    <InfoPill type="score" text={`${slide.rating} Reviews`} />
                    <InfoPill type="duration" text={slide.duration} />
                    <InfoPill
                      type="quality"
                      text={`${slide.quality} Quality`}
                    />
                  </div>

                  <div className="flex">
                    <h2 className="banner-title fw-bold text-uppercase">
                      {slide.title}
                    </h2>
                    <p className="banner-description pe-xl-5 me-xl-5">
                      {slide.description}
                    </p>
                  </div>
                  <div className="">Bottom Buttons</div>
                </div>
                {/* <div className="row justify-content-lg-between justify-content-center">
                  <div className="col-lg-6 col-md-9 col-sm-12 align-self-center">
                    <div className="content text-lg-start text-center">

                
                      <h2 className="banner-title fw-bold text-uppercase">
                        {slide.title}
                      </h2>
                      <p className="banner-description pe-xl-5 me-xl-5">
                        {slide.description}
                      </p>
                      <div className="d-flex align-items-center justify-content-center justify-content-lg-start gap-xl-4 gap-2">
                        <Link
                          href="movie-details"
                          className="hl-btn big-btn lh-1 btn-base fs-18 fw-bold radius-20 text-uppercase flex-shrink-0"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="13"
                            height="15"
                            viewBox="0 0 13 15"
                            fill="none"
                          >
                            <path
                              d="M1 2.66967C1 1.90998 1 1.53013 1.16686 1.31807C1.31227 1.13326 1.53485 1.01765 1.77687 1.00119C2.05461 0.982329 2.39036 1.18772 3.06203 1.59855L10.9592 6.42893C11.542 6.78532 11.8335 6.96359 11.934 7.19025C12.022 7.38826 12.022 7.61173 11.934 7.80974C11.8335 8.0364 11.542 8.21467 10.9592 8.57106L3.06203 13.4014C2.39036 13.8123 2.05461 14.0177 1.77687 13.9988C1.53485 13.9824 1.31227 13.8667 1.16686 13.6819C1 13.4699 1 13.0901 1 12.3304V2.66967Z"
                              fill="currentColor"
                              fillOpacity="0.2"
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>{slide.btnOneText}</span>
                        </Link>
                        <VideoTwo
                          title={slide.btnTwoText}
                          src="assets/video/video.mp4"
                        />
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
}

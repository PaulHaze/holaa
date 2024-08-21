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

                  <div className="">DETAILS</div>
                  <div className="">Bottom Buttons</div>
                </div>
                {/* <div className="row justify-content-lg-between justify-content-center">
                  <div className="col-lg-6 col-md-9 col-sm-12 align-self-center">
                    <div className="content text-lg-start text-center">

                    
                      <ul className="movie-info-list d-flex align-item-center justify-content-center justify-content-lg-start gap-lg-2 gap-1">
                        <li className="movie-info-list--item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8.00004 12.4493L3.05574 15.2169L4.16001 9.65938L0 5.81235L5.62676 5.14521L8.00004 0L10.3733 5.14521L16 5.81235L11.8401 9.65938L12.9443 15.2169L8.00004 12.4493Z"
                              fill="#999999"
                            />
                          </svg>
                          <span>{slide.rating} Reviews</span>
                        </li>
                        <li className="movie-info-list--item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                          >
                            <path
                              d="M7.5 15C3.35786 15 0 11.6421 0 7.5C0 3.35786 3.35786 0 7.5 0C11.6421 0 15 3.35786 15 7.5C15 11.6421 11.6421 15 7.5 15ZM8.25 7.5V3.75H6.75V9H11.25V7.5H8.25Z"
                              fill="#999999"
                            />
                          </svg>
                          <span>{slide.duration}</span>
                        </li>
                        <li className="movie-info-list--item">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M0.8 0H15.2C15.6418 0 16 0.3731 16 0.833333V14.1667C16 14.6269 15.6418 15 15.2 15H0.8C0.358176 15 0 14.6269 0 14.1667V0.833333C0 0.3731 0.358176 0 0.8 0ZM7.6 8.75V7.5H6.8V5H5.6V7.5H4.4V5H3.2V8.75H5.6V10H6.8V8.75H7.6ZM12.8 10L11 7.5L12.8 5H11.4L10 6.875V5H8.8V10H10V8.125L11.4 10H12.8Z"
                              fill="#999999"
                            />
                          </svg>
                          <span>{slide.quality} Quality</span>
                        </li>
                      </ul>
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

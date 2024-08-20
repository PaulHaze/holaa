'use client';

import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCards,
  Scrollbar,
} from 'swiper/modules';

import { heroOneData as data } from '@/data/hero';

const Video = dynamic(
  async () => {
    const mod = await import('@/components/video/VideoTwo');
    return mod.VideoTwo;
  },
  {
    ssr: false,
  },
);

export function HeroOne() {
  return (
    <div>
      <p>HeroOne Placeholder</p>
    </div>
  );
}

// import Image from 'next/image';

import { HeroCards } from '@/components/cards/HeroCards';
import { HeaderOne } from '@/components/header';

import { heroOneData as data } from '@/data/hero';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <div>
        <div className="flex flex-col items-center justify-center pt-10">
          <h2>HERO CARDS</h2>
          {data.cardSlides?.length && <HeroCards data={data.cardSlides} />}
        </div>
      </div>
    </main>
  );
}

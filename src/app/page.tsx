// import Image from 'next/image';

import { HeaderOne } from '@/components/header';
import { HeroOne } from '@/components/hero';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <div>
        <div className="flex h-[400px] flex-col items-center justify-center pt-10">
          <HeroOne />
          <h1 className="font-body">Holaa Movie App</h1>
        </div>
      </div>
    </main>
  );
}

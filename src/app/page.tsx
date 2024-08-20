// import Image from 'next/image';

import { HeaderOne } from '@/components/header';
import { HeroOne } from '@/components/hero';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={false} data={null} />
      <div>
        <div className="flex h-[400px] flex-col items-center justify-center pt-10">
          <h1 className="mb-10 font-body">Holaa Movie App</h1>
          <HeroOne />
        </div>
      </div>
    </main>
  );
}

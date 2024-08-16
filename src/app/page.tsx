// import Image from 'next/image';

import { HeaderOne, MobileMenu } from '@/components/header';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={false} data={null} />
      <div>
        <div className="flex h-[400px] flex-col items-center justify-center pt-10">
          <h1>Holaa Movie App</h1>
        </div>
        <div className="font-header bg-base-300">
          <div className="flex justify-center pt-5 text-center">
            <MobileMenu />
          </div>
        </div>
      </div>
    </main>
  );
}

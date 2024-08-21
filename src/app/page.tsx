// import Image from 'next/image';

import { HeaderOne } from '@/components/header';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <div>
        <div className="flex flex-col items-center justify-center pt-10"></div>
      </div>
    </main>
  );
}

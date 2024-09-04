import { HeaderOne } from '@/components/sections/header';
import { TrendingNow } from '@/components/sections/trending';

import { FeatureCards } from '@/components/sections/features/FeatureCards';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
      <h1 className="text-center">Feature Cards</h1>
      <FeatureCards />
    </main>
  );
}

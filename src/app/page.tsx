import { HeaderOne } from '@/components/sections/header';
import { TrendingNow } from '@/components/sections/trending';
import { FeatureCards } from '@/components/sections/features/FeatureCards';
import {} from '';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
      <FeatureCards />
    </main>
  );
}

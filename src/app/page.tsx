import { HeaderOne, TrendingNow, FeatureCards } from '@/components/sections';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
      <FeatureCards />
    </main>
  );
}

import {
  HeaderOne,
  TrendingNow,
  FeatureCards,
  TopTen,
} from '@/components/sections';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
      <FeatureCards />
      <TopTen />
    </main>
  );
}

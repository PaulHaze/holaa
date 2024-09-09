import {
  HeaderOne,
  TrendingNow,
  FeatureCards,
  TopTen,
  CategoryBrowser,
} from '@/components/sections';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
      <FeatureCards />
      <TopTen />
      <CategoryBrowser />
    </main>
  );
}

import {
  HeaderOne,
  TrendingNow,
  FeatureCards,
  TopTen,
  CategoryBrowser,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
      <FeatureCards />
      <TopTen />
      <CategoryBrowser />
      <Footer />
    </main>
  );
}

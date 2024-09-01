import { HeaderOne } from '@/components/sections/header';
import { TrendingNow } from '@/components/sections/trending';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <TrendingNow />
    </main>
  );
}

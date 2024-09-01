import { HeaderOne } from '@/components/sections/header';

export default function Home() {
  return (
    <main>
      <HeaderOne isHero={true} data={null} />
      <div className="mt-10 flex-center">
        <h1>OTHER CONTENT</h1>
      </div>
    </main>
  );
}

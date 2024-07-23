import { HeaderOne } from '@/components/header';

export default function Home() {
  return (
    <div className="">
      <HeaderOne isHero={false} data={null} />
      <div>
        <div className="flex h-[400px] flex-col items-center justify-center pt-10">
          <h1>Holaa Movie App</h1>
        </div>
        <div className="font-header h-[1000px] bg-base-300 flex-center">
          Scroll Content
        </div>
      </div>
    </div>
  );
}

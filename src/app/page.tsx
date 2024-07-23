import { HeaderOne } from '@/components/header';

export default function Home() {
  return (
    <div className="relative bb">
      <HeaderOne />
      <div className="relative">
        <div className="flex flex-col items-center pt-10">
          <h1>Holaa Movie App</h1>
        </div>
        <div className="font-header h-[1000px] bg-base-300 flex-center">
          Scroll Content
        </div>
      </div>
    </div>
  );
}

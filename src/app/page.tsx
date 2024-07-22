import { ThemeToggle } from '@/components/ui';

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute right-2 top-3">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center pt-10">
        <h1>Holaa Movie App</h1>
      </div>
      <div className="my-10 h-[1000px] bg-slate-600 font-heading"> Test</div>
      <div className="my-10 h-[1000px] bg-slate-600"> Test</div>
      <div className="my-10 h-[1000px] bg-slate-600"> Test</div>
      <div className="my-10 h-[1000px] bg-slate-600"> Test</div>
    </div>
  );
}

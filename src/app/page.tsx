import { ThemeToggle } from '@/components/ui';

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute right-2 top-3">
        <ThemeToggle />
      </div>
      <div className="flex flex-col items-center pt-10">
        <h1>TW/DaisyUI Next Starter</h1>
      </div>
    </div>
  );
}

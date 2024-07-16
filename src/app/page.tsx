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
      <div className="bg-gradient-bg my-10 flex flex-col items-center py-10 bb">
        <h1>Test DIv</h1>
      </div>
    </div>
  );
}

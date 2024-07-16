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
      <div className="my-10 flex flex-col items-center space-y-3 py-10">
        <h1 className="mb-3">Font Tests</h1>
        <h2 className="font-sans">Dosis Body (sans)</h2>
        <h2 className="font-heading">Lowball (heading)</h2>
        <h2 className="font-secondary">Jost (secondary)</h2>
        <h2 className="font-narrow">Big Shoulders (narrow)</h2>
      </div>
    </div>
  );
}

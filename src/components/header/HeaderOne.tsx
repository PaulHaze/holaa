import { NavBar } from '@/components/header/nav/NavBar';

interface HeaderOneProps {
  isHero: boolean;
  data: any;
}

export function HeaderOne({ isHero = false, data = null }: HeaderOneProps) {
  return (
    <header className="relative">
      {isHero && <h5>HERO</h5>}
      {data?.breadcrumb && <p>BREADCRUMB</p>}
      <NavBar />
    </header>
  );
}

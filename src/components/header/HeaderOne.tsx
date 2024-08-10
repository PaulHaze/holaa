import { NavBar } from '@/components/header/nav/NavBar';

interface HeaderOneProps {
  isHero: boolean;
  data: any;
}

export function HeaderOne({ isHero = true, data = null }: HeaderOneProps) {
  return (
    <header className="header navbar-area relative z-[99]">
      {isHero && <h5 className="pt-[1000px]">HERO</h5>}
      {data?.breadcrumb && <p>BREADCRUMB</p>}
      <NavBar />
    </header>
  );
}

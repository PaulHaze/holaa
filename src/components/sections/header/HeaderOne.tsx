import { MobileMenu, NavBar } from '@/components/nav';

import { HeroOne } from '@/components/sections/hero/HeroOne';

interface HeaderOneProps {
  isHero: boolean;
  data: any;
}

export function HeaderOne({ isHero = true, data = null }: HeaderOneProps) {
  return (
    <header className="header navbar-area relative z-99">
      {isHero && <HeroOne />}
      {data?.breadcrumb && <p>BREADCRUMB</p>}
      <NavBar />
      <MobileMenu />
    </header>
  );
}

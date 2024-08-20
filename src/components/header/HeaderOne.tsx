import { MobileMenu, NavBar } from './nav';
// import OffScreenMenu from './nav/OffscreenMenu';

import { HeroOne } from '@/components/hero';

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

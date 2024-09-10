// import { MobileMenu, NavBar } from '@/components/nav';

import { HeroOne } from '@/components/hero/HeroOne';

interface HeaderOneProps {
  isHero: boolean;
  data: any;
}

export function HeaderOne({ isHero = true, data = null }: HeaderOneProps) {
  return (
    <header className="">
      {isHero && <HeroOne />}
      {data?.breadcrumb && <p>BREADCRUMB</p>}
      {/* <NavBar />
      <MobileMenu /> */}
    </header>
  );
}

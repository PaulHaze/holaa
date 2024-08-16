import { MobileMenu, NavBar } from './nav';
// import OffScreenMenu from './nav/OffscreenMenu';

interface HeaderOneProps {
  isHero: boolean;
  data: any;
}

export function HeaderOne({ isHero = true, data = null }: HeaderOneProps) {
  return (
    <header className="header navbar-area relative z-99">
      {isHero && <h5 className="">HERO</h5>}
      {data?.breadcrumb && <p>BREADCRUMB</p>}
      <NavBar />
      <MobileMenu />
      {/* <OffScreenMenu /> */}
    </header>
  );
}

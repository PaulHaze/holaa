'use client';

import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useUiContext } from '@/context/UiContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { menuOneData as data } from '@/data/menu';

import { ThemeToggle } from './ThemeToggle';

import { cn } from '@/utils/clsxm';
import styles from './nav.module.scss';

export function NavBar() {
  const { isScrollingUp } = useScrollDirection();
  const { toggleMobileMenu } = useUiContext();

  const [showBox, setShowBox] = useState(false);

  const pathName = usePathname();
  const routePath = pathName === '/' ? pathName : pathName.replace(/^\/+/g, '');

  // Close search box on click anywhere in window
  useEffect(() => {
    const closeSearch = () => {
      setShowBox(false);
    };
    window.addEventListener('click', closeSearch);

    return () => {
      window.removeEventListener('click', closeSearch);
    };
  }, []);

  const checkActiveMenu = (menu: Menu) => {
    if (menu.href === '#' && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find(
        (subMenu: SubMenu) => subMenu.href === routePath,
      )
        ? 'active'
        : '';
    }
    return routePath === menu.href ? 'active' : '';
  };

  const toggleSearchBox = (e: SyntheticEvent) => {
    e.stopPropagation();
    setShowBox(!showBox);
  };

  const stopPropagation = (e: SyntheticEvent) => {
    e.stopPropagation();
  };

  return (
    <nav
      className={cn(
        'nav-container start-50 translate-middle-x',
        styles.navbar,
        isScrollingUp ? styles.showNav : styles.hideNav,
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-lg items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="main-logo flex-shrink-0">
          <Image src={data.logo} alt="logo" />
        </Link>

        {/* LINKS */}
        <div className="hidden lg:inline-block">
          {data.menus && data.menus.length > 0 && (
            <ul className="main-menu flex gap-x-5">
              {data.menus.map((menu, index) => (
                <li
                  key={index}
                  className={`menu-item ${
                    menu.subMenus &&
                    menu.subMenus.length > 0 &&
                    'menu-item-has-children'
                  }`}
                >
                  LINK
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* SEARCH + HAMBURGER */}
        <ThemeToggle />
      </div>
    </nav>
  );
}

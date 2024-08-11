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

import navIcon from '~/images/icons/nav-icon.svg';
import navChevron from '~/images/icons/nav-chevron.svg';

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
      <div className="mx-auto flex w-full max-w-lg items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="main-logo flex-shrink-0">
          <Image src={data.logo} alt="logo" />
        </Link>

        {/* LINKS */}
        <div className="hidden lg:inline-block">
          {data.menus && data.menus.length > 0 && (
            <ul className="main-menu flex gap-x-5">
              {data.menus.map((menu) => (
                <li
                  key={menu.name}
                  className={`menu-item ${
                    menu.subMenus &&
                    menu.subMenus.length > 0 &&
                    'menu-item-has-children'
                  }`}
                >
                  <Link
                    href={menu.href}
                    className={`menu-link flex ${checkActiveMenu(menu)}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        opacity="0.4"
                        d="M6.57373 12.3083H11.4266"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1 10.3704C1 5.8656 1.51241 6.18 4.27061 3.728C5.47737 2.7968 7.35509 1 8.97662 1C10.5973 1 12.5126 2.788 13.7302 3.728C16.4884 6.18 17 5.8656 17 10.3704C17 17 15.3651 17 8.99999 17C2.63489 17 1 17 1 10.3704Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{menu.name}</span>
                  </Link>
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

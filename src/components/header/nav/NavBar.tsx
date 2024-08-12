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

import { MenuIcon, MenuChevron } from '@/components/ui/icons';

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

  const renderSubMenu = (subMenus: SubMenu[], parentRoutePath: string) => (
    <ul className="sub-menu">
      {subMenus.map((subMenu, index) => (
        <li
          key={index}
          className={`sub-menu--item ${
            subMenu.subMenus?.length ? 'menu-item menu-item-has-children' : ''
          }`}
        >
          <Link
            href={subMenu.href}
            className={`sub-menu--link ${
              parentRoutePath === subMenu.href ? 'active' : ''
            }`}
          >
            {subMenu.name}
          </Link>
          {subMenu.subMenus && renderSubMenu(subMenu.subMenus, parentRoutePath)}
        </li>
      ))}
    </ul>
  );

  return (
    <nav
      className={cn(
        'nav-container start-50 translate-middle-x inline-block',
        styles.navbar,
        isScrollingUp ? styles.showNav : styles.hideNav,
      )}
    >
      <div className="mx-auto flex w-full max-w-lg items-center justify-between gap-x-7">
        {/* LOGO */}
        <Link href="/" className="main-logo flex-shrink-0">
          <Image src={data.logo} alt="logo" />
        </Link>
        {/* LINKS */}
        <div className="hidden lg:inline-block">
          {data.menus?.length && (
            <ul className="main-menu flex gap-x-7">
              {data.menus.map((menu: Menu, index) => (
                <li
                  key={index}
                  className={`menu-item ${
                    menu.subMenus?.length && 'menu-item-has-children'
                  }`}
                >
                  {/* TOP MENU ITEM */}
                  <Link
                    href={menu.href}
                    className={`menu-link flex ${checkActiveMenu(menu)}`}
                  >
                    <div className="mr-1 mt-0.5 h-5 w-5">
                      <MenuIcon className="h-full w-full" />
                    </div>
                    <span>{menu.name}</span>
                    {menu.subMenus?.length ? (
                      <div className="ml-2 mt-1 h-5 w-5">
                        <MenuChevron className="h-full w-full" />
                      </div>
                    ) : (
                      ''
                    )}
                  </Link>

                  {/* SUB MENU ITEMS */}
                  {menu.subMenus?.length &&
                    renderSubMenu(menu.subMenus, routePath)}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* SEARCH + HAMBURGER */}
        <div className="ml-10">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

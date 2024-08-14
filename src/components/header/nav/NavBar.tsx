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

import { MenuIcon, MenuChevron, SearchIcon } from '@/components/ui/icons';

export function NavBar() {
  //#region HOOKS & FUNCS
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
  //#endregion

  return (
    <nav
      className={cn('nav-container', isScrollingUp ? 'show-nav' : 'hide-nav')}
    >
      <div className="mx-auto flex w-full max-w-lg items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="main-logo flex-shrink-0">
          <Image src={data.logo} alt="logo" />
        </Link>
        {/* LINKS */}
        <div className="hidden lg:inline-block">
          {data.menus?.length && (
            <ul className="main-menu">
              <div className="space-x-7">
                {data.menus.map((menu: Menu, index) => (
                  <li
                    key={index}
                    className={cn(
                      'menu-item',
                      menu.subMenus?.length && 'menu-item-has-children',
                    )}
                  >
                    {/* TOP MENU ITEM */}
                    <Link
                      href={menu.href}
                      className={`menu-link ${checkActiveMenu(menu)}`}
                    >
                      <div className="mr-1 mt-0.5 h-5 w-5">
                        <MenuIcon className="h-full w-full" />
                      </div>
                      <span>{menu.name}</span>
                      {menu.subMenus?.length ? (
                        <div className="ml-2 h-5 w-5">
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
              </div>
            </ul>
          )}
        </div>

        {/* SEARCH + HAMBURGER */}
        <div className="nav-right-part inline-flex items-center pl-5">
          <div className="relative inline-block">
            {/* SEARCH */}
            <div className="search ml-auto">
              <button
                className={cn(
                  'header_search_btn border-0 bg-transparent',
                  showBox && 'close',
                )}
                onClick={toggleSearchBox}
              >
                <SearchIcon className="fill-white/70" />
              </button>
            </div>
            {/* SEARCH BOX */}
            <div
              className={cn(
                'header_search_box absolute end-0',
                showBox && 'show_box',
              )}
              onClick={stopPropagation}
            >
              SEARCH
            </div>
          </div>
        </div>

        {/* <div className="ml-10">
          <ThemeToggle />
        </div> */}
      </div>
    </nav>
  );
}

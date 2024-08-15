'use client';

import { useEffect, useState } from 'react';
import type { SyntheticEvent } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

// import { useUiContext } from '@/context/UiContext';
import { useScrollDirection } from '@/hooks/useScrollDirection';
import { menuOneData as data } from '@/data/menu';

// import { ThemeToggle } from './ThemeToggle';

import { cn } from '@/utils/clsxm';

import { LuCrown } from 'react-icons/lu';
import { MenuIcon, MenuChevron, SearchIcon } from '@/components/ui/icons';

export function NavBar() {
  //#region HOOKS & FUNCS
  const { isScrollingUp } = useScrollDirection();
  // const { toggleMobileMenu } = useUiContext();

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

        <div className="nav-right-part inline-flex items-center pl-5">
          {/* SEARCH */}
          <div className="relative inline-block">
            <div className="search ml-auto">
              <button
                className={cn(
                  'header_search_btn border-0 bg-transparent',
                  showBox && 'close',
                )}
                onClick={toggleSearchBox}
              >
                <SearchIcon className="mt-1 fill-white/70" />
              </button>
            </div>
            <div
              className={cn(
                'header_search_box absolute end-0',
                showBox && 'show_box',
              )}
              onClick={stopPropagation}
            >
              <form className="single_form header_search_form flex items-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Search query..."
                  required={false}
                  className="search"
                  autoFocus={false}
                />
                <button
                  type="submit"
                  className="flex items-center justify-center"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1376_579)">
                      <path
                        d="M23.707 22.293L17.738 16.324C19.3647 14.3346 20.1644 11.7961 19.9719 9.23357C19.7793 6.67103 18.6092 4.28053 16.7036 2.55652C14.798 0.832514 12.3026 -0.0931045 9.73367 -0.0288727C7.16472 0.0353591 4.71873 1.08453 2.90164 2.90162C1.08455 4.71871 0.035382 7.1647 -0.0288498 9.73365C-0.0930816 12.3026 0.832537 14.798 2.55655 16.7036C4.28056 18.6092 6.67106 19.7793 9.23359 19.9718C11.7961 20.1644 14.3346 19.3646 16.324 17.738L22.293 23.707C22.4816 23.8892 22.7342 23.99 22.9964 23.9877C23.2586 23.9854 23.5094 23.8802 23.6948 23.6948C23.8803 23.5094 23.9854 23.2586 23.9877 22.9964C23.99 22.7342 23.8892 22.4816 23.707 22.293ZM10 18C8.41778 18 6.87106 17.5308 5.55546 16.6518C4.23987 15.7727 3.21449 14.5233 2.60899 13.0615C2.00349 11.5997 1.84506 9.99113 2.15374 8.43928C2.46243 6.88743 3.22435 5.46197 4.34317 4.34315C5.46199 3.22433 6.88746 2.4624 8.4393 2.15372C9.99115 1.84504 11.5997 2.00347 13.0615 2.60897C14.5233 3.21447 15.7727 4.23985 16.6518 5.55544C17.5308 6.87103 18 8.41775 18 10C17.9976 12.121 17.154 14.1545 15.6543 15.6542C14.1545 17.154 12.121 17.9976 10 18Z"
                        fill="#E82B4B"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1376_579">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* HEADER BUTTON */}
          <Link
            href="pricing"
            className="hl-btn btn-base ml-5 flex items-center uppercase mmd:hidden"
          >
            <LuCrown />
            <span>{data.btnText}</span>
          </Link>

          {/* HAMBURGER */}
          <div className="lg:hidden">X</div>
        </div>

        {/* <div className="ml-10">
          <ThemeToggle />
        </div> */}
      </div>
    </nav>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useUiContext } from '@/context/UiContext';

import { cn } from '@/utils/clsxm';

import { menuOneData as data } from '@/data/menu';
import { socials } from '@/data/social';

// import { LuXCircle } from 'react-icons/lu';
import { GrClose } from 'react-icons/gr';

export function MobileMenu() {
  //#region Funcs + Hooks
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
    isMobileMenuOpen,
  } = useUiContext();

  const pathName = usePathname();

  const routePath = pathName === '/' ? pathName : pathName.replace(/^\/+/g, '');

  const checkActiveMenu = (menu: Menu) => {
    if (menu.href === '#' && menu.subMenus?.length) {
      return menu.subMenus.find((subMenu) => subMenu.href === routePath)
        ? 'active'
        : '';
    }
    return routePath === menu.href ? 'active' : '';
  };

  const hideMobileMenu = (index: number | null) => {
    toggleMobileMenu();
    setOpenSubMenuIndex(index || null);
  };

  const renderSubMenus = (subMenus: SubMenu[], index: number) => (
    <ul className={cn('sub-menu', openSubMenuIndex === index && 'open')}>
      {subMenus.map((subMenu: SubMenu, key) => (
        <li key={key} className="menu-item">
          <Link
            href={subMenu.href}
            className={routePath === subMenu.href ? 'current' : ''}
            onClick={() => hideMobileMenu(index)}
          >
            {subMenu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
  //#endregion

  return (
    <div
      id="sidebar-menu"
      className={cn('popup_mobile_menu', isMobileMenuOpen && 'show_menu')}
    >
      <div className="mobile-menu">
        {/* HEADER */}
        <div className="mobile-menu__top mb-10">
          <div className="menu_header flex items-center justify-between pb-8 pt-3">
            <div className="logo">
              <Link className="main-logo" href={data.href}>
                <Image src={data.logo} alt="logo" />
              </Link>
            </div>
            <button
              className="flex h-11 w-11 items-center justify-center rounded-half border"
              onClick={toggleMobileMenu}
            >
              <div className="w-max p-1 text-white/80">
                <GrClose size={18} />
              </div>
            </button>
          </div>
        </div>

        {/* CONTENT */}
        <div className="mobile-menu__content mobile_menu_nav flex flex-col">
          <ul id="menu-main-menu" className="menu_list py-2">
            {data.menus.map((menu: Menu, index) => (
              <li
                key={index}
                className={cn(
                  'nav-home menu-item mb-4 list-none py-2',
                  menu.subMenus?.length &&
                    'menu-item-has-children relative overflow-hidden',
                  openSubMenuIndex === index && 'show',
                )}
              >
                <Link
                  href={menu.subMenus?.length ? '#' : menu.href}
                  onClick={(event) =>
                    menu.subMenus?.length
                      ? toggleSubMenu(index, event)
                      : hideMobileMenu(index)
                  }
                  className={cn(checkActiveMenu(menu), 'z-999')}
                >
                  {menu.name}
                </Link>
                {menu.subMenus?.length && renderSubMenus(menu.subMenus, index)}
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIALS AREA */}
        <div className="mt-auto border-t border-neutral-800 mlg:pt-5">
          <ul className="social_share__list flex items-center justify-between">
            {socials.map((social, index) => (
              <li key={index} className="">
                <Link href={social.href} className="social_share__list_link">
                  {social.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

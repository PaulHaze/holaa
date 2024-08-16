'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useUiContext } from '@/context/UiContext';

import { cn } from '@/utils/clsxm';

import { menuOneData as data } from '@/data/menu';
import { socials } from '@/data/social';

import { LuXCircle } from 'react-icons/lu';

export function MobileMenu() {
  //#region Funcs + Hooks
  const {
    openSubMenuIndex,
    setOpenSubMenuIndex,
    toggleSubMenu,
    toggleMobileMenu,
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
        <li
          key={key}
          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2315"
        >
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
    <div id="sidebar-menu" className="popup_mobile_menu w-[400px] bg-slate-900">
      <div className="c-backdrop" onClick={toggleMobileMenu}>
        <div className="menu">
          <div className="menu__top">
            <div className="menu_header flex items-center justify-between">
              <div className="logo">
                <Link className="main-logo" href={data.href}>
                  <Image src={data.logo} alt="logo" />
                </Link>
              </div>
              <button
                className="close_button flex items-center justify-center"
                onClick={toggleMobileMenu}
              >
                <div className="close">
                  <LuXCircle size={30} />
                </div>
              </button>
            </div>
          </div>

          <div className="menu__content mobile_menu_nav">
            <div className="block">
              <div className="menu-main-menu-container">
                <ul id="menu-main-menu" className="menu_list">
                  {data.menus.map((menu: Menu, index) => (
                    <li
                      key={index}
                      className={cn(
                        {
                          'menu-item-has-children': menu.subMenus?.length,
                          show: openSubMenuIndex === index,
                        },
                        'nav-home menu-item',
                      )}
                    >
                      <Link
                        href={menu.subMenus?.length ? '#' : menu.href}
                        onClick={(event) =>
                          menu.subMenus?.length
                            ? toggleSubMenu(index, event)
                            : hideMobileMenu(null)
                        }
                        className={`${checkActiveMenu(menu)}`}
                      >
                        {menu.name}
                      </Link>
                      {menu.subMenus?.length &&
                        renderSubMenus(menu.subMenus, index)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SOCIALS AREA */}
          <div className="social_share mt-auto">
            <ul className="social_share__list flex items-center">
              {socials.map((social, index) => (
                <li key={index} className="facebook flex-center">
                  <Link href={social.href} className="social_share__list_link">
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

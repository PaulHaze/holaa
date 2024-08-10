'use client';

import { useEffect, useState } from 'react';

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

  const checkActiveMenu = (menu) => {
    if (menu.href === '#' && menu.subMenus && menu.subMenus.length > 0) {
      return menu.subMenus.find((subMenu) => subMenu.href === routePath)
        ? 'active'
        : '';
    }
    return routePath === menu.href ? 'active' : '';
  };

  return (
    <nav
      className={cn(
        styles.navbar,
        isScrollingUp ? styles.showNav : styles.hideNav,
      )}
    >
      <div className={styles.content}>
        <Image src={data.logo} alt="logo" />
        <ThemeToggle />
      </div>
    </nav>
  );
}

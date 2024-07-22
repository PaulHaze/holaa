'use client';

import { ThemeToggle } from './ThemeToggle';

import { useScrollDirection } from '@/hooks/useScrollDirection';

import { cn } from '@/utils/clsxm';
import styles from './nav.module.scss';

export function NavBar() {
  const { isScrollingUp } = useScrollDirection();

  return (
    <div
      className={cn(
        styles.navbar,
        isScrollingUp ? styles.showNav : styles.hideNav,
      )}
    >
      <p>LOGO</p>
      <ThemeToggle />
    </div>
  );
}

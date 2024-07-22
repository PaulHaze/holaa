'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { useUiContext } from '@/context/UiContext';

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
      <div className={styles.content}>
        <p>LOGO</p>
        <ThemeToggle />
      </div>
    </div>
  );
}

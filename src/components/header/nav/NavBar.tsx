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

  return (
    <div
      className={cn(
        styles.navbar,
        isScrollingUp ? styles.showNav : styles.hideNav,
      )}
    >
      <div className={styles.content}>
        <Image src={data.logo} alt="logo" />
        <ThemeToggle />
      </div>
    </div>
  );
}

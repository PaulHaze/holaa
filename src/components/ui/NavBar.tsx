'use client';

import { useState, useEffect } from 'react';
import styles from './nav.module.scss';

import { cn } from '@/utils/clsxm';

export function NavBar() {
  const [position, setPosition] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const moving = window.scrollY;
        setVisible(position > moving);
        setPosition(moving);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return undefined;
  });

  return (
    <div
      className={cn(styles.navbar, visible ? styles.showNav : styles.hideNav)}
    >
      <p>NavBar Placeholder</p>
    </div>
  );
}

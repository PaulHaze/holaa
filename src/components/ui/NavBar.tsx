import styles from './nav.module.scss';

import { cn } from '@/utils/clsxm';

export function NavBar() {
  const isVisible = true;
  return (
    <div
      className={cn(styles.navbar, isVisible ? styles.showNav : styles.hideNav)}
    >
      <p>NavBar Placeholder</p>
    </div>
  );
}

import type { SVGProps } from 'react';

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20 "
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="100px"
    height="100px"
    {...props}
  >
    <path stroke="currentColor" d="M6.574 12.308h4.853" opacity={1} />
    <path
      stroke="currentColor"
      d="M1 10.37c0-4.504.512-4.19 3.27-6.642C5.478 2.797 7.356 1 8.978 1c1.62 0 3.536 1.788 4.753 2.728C16.488 6.18 17 5.866 17 10.37 17 17 15.365 17 9 17s-8 0-8-6.63Z"
    />
  </svg>
);

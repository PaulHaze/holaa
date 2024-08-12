import type { SVGProps } from 'react';

export const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    {...props}
  >
    <path stroke="currentColor" d="M6.574 12.308h4.853" opacity={0.4} />
    <path
      stroke="currentColor"
      d="M1 10.37c0-4.504.512-4.19 3.27-6.642C5.478 2.797 7.356 1 8.978 1c1.62 0 3.536 1.788 4.753 2.728C16.488 6.18 17 5.866 17 10.37 17 17 15.365 17 9 17s-8 0-8-6.63Z"
    />
  </svg>
);

export const OtherIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    fill="none"
  >
    <path
      opacity="0.4"
      d="M6.57373 12.3083H11.4266"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1 10.3704C1 5.8656 1.51241 6.18 4.27061 3.728C5.47737 2.7968 7.35509 1 8.97662 1C10.5973 1 12.5126 2.788 13.7302 3.728C16.4884 6.18 17 5.8656 17 10.3704C17 17 15.3651 17 8.99999 17C2.63489 17 1 17 1 10.3704Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

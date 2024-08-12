import type { SVGProps } from 'react';

export const MenuChevron = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 6"
    fill="none"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.05 2.426C1.833 1.566.67 1.2.114 1.2V0c.96 0 2.397.534 3.726 1.474C4.865 2.198 5.878 3.2 6.614 4.48 7.349 3.2 8.362 2.198 9.387 1.474 10.716.534 12.154 0 13.113 0v1.2c-.556 0-1.718.366-2.935 1.226C9.033 3.236 7.92 4.428 7.302 6H5.925C5.307 4.428 4.194 3.235 3.05 2.426Z"
    />
  </svg>
);

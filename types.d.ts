type SubMenu = {
  name: string;
  href: string;
  subMenus?: SubMenu[];
};

type Menu = {
  name: string;
  href: string;
  subMenus?: SubMenu[];
};

type MovieCard = {
  image: StaticImageData;
  isRibbon: boolean;
  count: number | string;
  videoSrc: string;
  href: string;
  title: string;
  rating: string;
  duration: string;
  quality: string;
  categories: string[];
};

type Feature = {
  image: any;
  title: string;
  description: string;
};

type Category = {
  image: any;
  title: string;
  href: string;
};

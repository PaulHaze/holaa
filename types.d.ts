type Menu = {
  name: string;
  href: string;
  subMenus?: SubMenu[];
};

type SubMenu = {
  name: string;
  href: string;
};

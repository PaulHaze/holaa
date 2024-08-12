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

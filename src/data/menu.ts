import logo from '@/assets/images/logo.svg';

export const menuOneData = {
  logo,
  href: '/',
  btnText: 'Subscribe Now',
  menus: [
    {
      name: 'Home',
      href: '/',
      subMenus: [
        {
          name: 'Home One',
          href: '/',
        },
        {
          name: 'Home Two',
          href: 'home-two',
        },
      ],
    },
    {
      name: 'Pages',
      href: '/pages',
      subMenus: [
        { name: 'About', href: 'about' },
        { name: '404', href: 'not-found' },
        { name: 'Login', href: 'login' },
      ],
    },
    {
      name: 'Components',
      href: '/components',
      subMenus: [
        { name: 'Ui Elements', href: '/ui-elements' },
        { name: 'Heros', href: '/heros' },
        { name: 'Movie Cards', href: '/movie-cards' },
      ],
    },
    {
      name: 'Blog',
      href: '/blog',
    },
  ],
};

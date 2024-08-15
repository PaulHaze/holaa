/* eslint-disable no-console */

'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import type {
  ReactNode,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react';

interface UiContextType {
  isFixedTop: boolean;
  openSubMenuIndex: number | null;
  setOpenSubMenuIndex: Dispatch<SetStateAction<number | null>>;
  toggleSubMenu: (index: number, event: SyntheticEvent) => void;
  toggleMobileMenu: () => void;
  showScrollTop: boolean;
  scrollToTop: () => void;
}

interface Props {
  children: ReactNode;
}

const UiContext = createContext<UiContextType>({} as UiContextType);

export const useUiContext = () => {
  const ctx = useContext(UiContext);
  if (!ctx) {
    throw new Error('useUiContext has to be used within <UiContext.Provider>');
  }
  return ctx;
};

export const UiProvider = ({ children }: Props) => {
  const [isFixedTop, setIsFixedTop] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  //#region SCROLLING
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight =
        document.querySelector<HTMLElement>('.header')?.offsetHeight;
      if (navbarHeight) {
        if (window.scrollY > navbarHeight + 150) {
          console.log('SETTING isFixed');
          setIsFixedTop(true);
        } else {
          console.log('REMOVING isFixed');
          setIsFixedTop(false);
        }

        if (window.scrollY > window.innerHeight) {
          setShowScrollTop(true);
        } else {
          setShowScrollTop(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  //#endregion

  //#region MENUS
  const toggleSubMenu = (index: number, event: SyntheticEvent) => {
    event.preventDefault();
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  const toggleMobileMenu = () => {
    console.log('mobile mene called from context');
    // setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsMobileMenuOpen((current) => !current);
    console.log(isMobileMenuOpen);
    const popupMobileMenu = document.querySelector('.popup_mobile_menu');
    if (popupMobileMenu) {
      if (!isMobileMenuOpen) {
        popupMobileMenu.classList.add('show-menu');
      } else {
        popupMobileMenu.classList.remove('show_menu');
      }
    }
  };
  //#endregion

  return (
    <UiContext.Provider
      value={{
        isFixedTop,
        openSubMenuIndex,
        setOpenSubMenuIndex,
        toggleSubMenu,
        toggleMobileMenu,
        showScrollTop,
        scrollToTop,
      }}
    >
      {children}
    </UiContext.Provider>
  );
};

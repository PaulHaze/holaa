import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [position, setPosition] = useState(window.scrollY);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        const moving = window.scrollY;
        setIsVisible(position > moving);
        setPosition(moving);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    return undefined;
  });
  return { isVisible };
}

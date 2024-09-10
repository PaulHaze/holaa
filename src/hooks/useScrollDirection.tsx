import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [position, setPosition] = useState(0);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    setPosition(window.scrollY);
    const handleScroll = () => {
      const moving = window.scrollY;
      setIsScrollingUp(position >= moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return { isScrollingUp };
}

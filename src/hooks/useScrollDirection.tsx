import { useState, useEffect } from 'react';

export function useScrollDirection() {
  const [position, setPosition] = useState(
    typeof window !== 'undefined' ? window.scrollY : 0,
  );
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.scrollY;
      setIsScrollingUp(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  return { isScrollingUp };
}

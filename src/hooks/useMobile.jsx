import { useState, useEffect } from 'react';

const MOBILE_MAX_WIDTH = 830;

const useMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= MOBILE_MAX_WIDTH);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

export default useMobile;

import { useState, useEffect } from 'react';

const DarkBackground = () => {
  const [imageSrc, setImageSrc] = useState('images/bg-desktop-dark.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSrc('images/bg-mobile-dark.jpg');
      } else {
        setImageSrc('images/bg-desktop-dark.jpg');
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <img className="dark-background" src={imageSrc} alt="" />
    </div>
  );
};

export default DarkBackground;

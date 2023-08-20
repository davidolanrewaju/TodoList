import { useState, useEffect } from 'react';

const LightBackground = () => {
  const [imageSrc, setImageSrc] = useState('images/bg-desktop-light.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSrc('images/bg-mobile-light.jpg');
      } else {
        setImageSrc('images/bg-desktop-light.jpg');
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
      <img className="light-background" src={imageSrc} alt="" />
    </div>
  );
};

export default LightBackground;

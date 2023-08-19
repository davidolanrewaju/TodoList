import { useState, useEffect } from 'react';

const LightBackground = () => {
  const [imageSrc, setImageSrc] = useState('../src/images/bg-desktop-light.jpg');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setImageSrc('../src/images/bg-mobile-light.jpg');
      } else {
        setImageSrc('../src/images/bg-desktop-light.jpg');
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

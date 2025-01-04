import React, { useEffect, useState } from 'react';

const ScrollEventComponent = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
    console.log('Scroll Y:', window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Scroll Event Example</h1>
      <p>Current Scroll Position: {scrollY}</p>
      <div style={{ height: '200vh', background: 'linear-gradient(to bottom, lightblue, pink)' }}>
        Scroll down to see the effect.
      </div>
    </div>
  );
};

export default ScrollEventComponent;

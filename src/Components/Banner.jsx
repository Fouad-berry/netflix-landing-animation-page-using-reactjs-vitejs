import React, { useState, useEffect, useCallback, useMemo } from 'react';
import banner_img1 from '../assets/banner_img1.png';
import banner_img2 from '../assets/banner_img2.jpg';
import banner_img3 from '../assets/banner_img3.jpg';
import banner_gif1 from '../assets/banner_video1.gif';
import banner_gif2 from '../assets/banner_video20.gif';
import banner_gif3 from '../assets/banner_video3.gif';

import { TheNavbar } from './TheNavbar';

export const Banner = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [bannerIndex, setBannerIndex] = useState(0);

  const images = useMemo(() => [banner_img1, banner_img2, banner_img3], []);
  const gifs = useMemo(() => [banner_gif1, banner_gif2, banner_gif3], []);

  const texts = useMemo(
    () => [
      {
        title: 'My Hero Academia',
        description: 'My Hero Academia est un manga captivant sur les aventures de jeunes héros.',
      },
      {
        title: 'One Piece',
        description:
          'One Piece est un manga épique qui suit les aventures de Monkey D. Luffy et de son équipage de pirates à la recherche du légendaire trésor, le One Piece, dans un monde rempli d-aventures, de combats et d-amitié.',
      },
      {
        title: 'Demon Slayer',
        description:
          'Demon Slayer est un manga captivant qui suit les aventures dun jeune garçon nommé Tanjiro Kamado, qui devient un pourfendeur de démons pour venger sa famille et sauver sa sœur transformée en démon.',
      },
    ],
    []
  );

  const handleHover = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setBannerIndex(randomIndex);
  }, [images]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    new Image().src = gifs[randomIndex];
  }, [gifs, isHovered]);

  return (
    <div className='banner'>
      <TheNavbar />
      <div className='banner-container'>
        <img
          className='banner-img'
          src={isHovered ? gifs[bannerIndex] : images[bannerIndex]}
          alt='Ma banner'
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        />
        <div className='banner-text'>
          {texts[bannerIndex].title}
          <h4 className='dexcri'>{texts[bannerIndex].description}</h4>
        </div>
      </div>
    </div>
  );
};

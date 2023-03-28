import React, { useRef, useMemo, useState } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/lib/carousel';
import styles from './index.module.scss';

export const HomeCarousel: React.FC = () => {
  const carouselRef = useRef<CarouselRef>(null);
  const [dotActive, setDotActive] = useState<Number>(1);

  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const handleActiveChange = (i: number) => {
    carouselRef?.current?.goTo(i - 1);
    console.log(i);
    setDotActive(i);
  }

  const fields = useMemo(() => {
    const buttons = [];
    for (let i = 1; i < 6; i++) {
      if (i == dotActive)
        buttons.push(<button className='dotbtn-active' key={i} onClick={() => {
          handleActiveChange(i);
        }} value={i} />);
      else {
        buttons.push(<button className='dotbtn' key={i} onClick={() => {
          handleActiveChange(i);
        }} value={i} />);
      }
    }
    return buttons;
  }, [dotActive, handleActiveChange]);

  return (
    <>
      <div className='child inset-x-0 grid gap-x-6 grid-cols-5'>
        {fields}
      </div>
      <Carousel afterChange={onChange} ref={carouselRef}>
        <div>
          <div className='w-full aspect-[1240/664] content bg-cover bg-center' style={{ backgroundImage: 'url(./images/1.png)' }}>

            <div className='aspect-[597/262] frame'>
              <h1 className='aspect-[597/134] font'>Find A Place You'd Love To Call <span style={{ color: '#F28B13' }}>Home</span></h1>
              <div className='frame10'>
                <p className='font1'>Find your dream home anytime, anywhere!</p>
                <button className='button'><span className='buttonFont'>Start Browsing now!</span></button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full aspect-[1240/664] content-mask bg-cover bg-center' style={{ backgroundImage: 'url(./images/2.png)' }}>
            <div className='aspect-[576/262] frame2'>
              <h1 className='aspect-[576/134] font'>Get Notified Each Time A Great <span style={{ color: '#F28B13' }}>Deal</span> Arises</h1>
              <div className='frame10'>
                <p className='font1'>Find your dream home anytime, anywhere!</p>
                <button className='button'><span className='buttonFont'>Find Out How And When</span></button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='w-full aspect-[1240/664] content-mask bg-cover bg-center' style={{ backgroundImage: 'url(./images/3.png)' }}>
            <div className='aspect-[673/238] frame3'>
              <h1 className='aspect-[673/134] font'>We partnered with the best <span style={{ color: '#F28B13' }}>Agencies</span> in your area</h1>
              <div className='frame10'>
                <p className='font1'>Find out more about them...</p>
                <button className='button'><span className='buttonFont'>Let's go</span></button>
              </div>
            </div>
          </div>
        </div>
      </Carousel >
    </>
  );
};


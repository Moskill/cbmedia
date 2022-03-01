import React, { useState, useEffect } from 'react';
import classes from './Slider.module.css';
import design from '../../../assets/design.jpg';
import development from '../../../assets/development.jpg';
import photographic from '../../../assets/photographic.jpg';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { SliderData } from '../slider/SliderData';
import SliderDots from './SliderDots';
import Infobox from './infobox/Infobox';

const Slider = (props) => {

  const [current, setCurrent] = useState(0);
  const length = SliderData.length;

  const getImage = (image) => {
    switch (image) {
      case 'design':
        return design.src;  
      case 'development':
        return development.src;  
      case 'photographic':
        return photographic.src;  
    }
  }

  const nextSlide = () => {

    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  }

  const selectSlidePerDot = (index) => {
    setCurrent(index);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, [current]);


  return (
    <>
      <section className={classes.slider}>
        <Infobox data={SliderData[current]} />
        <div className={classes.pagination}>
          {SliderData.map((item, index) => {
            return <SliderDots key={index} index={index} active={current} onClick={selectSlidePerDot} />
          })}

        </div>
        <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
        <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
        
        {SliderData.map((item, index) => {
          return (
            <div className={index === current ? classes['slide-active'] : classes.slide} key={index}>
              {index === current && (
                <img src={getImage(item.image)} alt={item.subtitle} className={classes.image} key={index}/> 
              )}
            </div>
          )
        })}
      
      </section>
    </>
  )
}

export default Slider
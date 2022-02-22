import React, { useState } from 'react';
import classes from './Slider.module.css';
import design from '../../../assets/design.jpg';
import development from '../../../assets/development.jpg';
import photographic from '../../../assets/photographic.jpg';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import { SliderData } from '../slider/SliderData';

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

  console.log(current, 'CURENT')

  return (
    <>
      <section className={classes.slider}>
    <div className={classes['slider-infobox']}>
      <h1>{SliderData[current].title}</h1>
    </div>
        <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
        <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
        {SliderData.map((item, index) => {
          return (
            <div className={index === current ? classes['slide-active'] : classes.slide} key={index}>
              {index === current && (
                <img src={getImage(item.image)} alt={item.subtitle} className={classes.image}/> 
              )}
            </div>
          )
        })}
      
      </section>
    </>
  )
}

export default Slider
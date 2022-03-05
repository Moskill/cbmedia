import React, {useState} from 'react';
import {webentwicklung, webdesign} from './servicesData';
import classes from './Services.module.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import bildname1 from '../../../assets/xs/webdev/bildname1.jpg';
import bildname2 from '../../../assets/xs/webdev/bildname2.jpg';
import bildname3 from '../../../assets/xs/webdev/bildname3.jpg';
import bildname4 from '../../../assets/xs/webdev/bildname4.jpg';
import bildname5 from '../../../assets/xs/webdev/bildname5.jpg';

const Services = (props) => {

  const [current, setCurrent] = useState(0);
  const length = webentwicklung.length;

  let imgArr = [bildname1, bildname2, bildname3, bildname4, bildname5];

  const getImage = (image) => {
    console.log('getImage wurde aufgerufen!')
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

  console.log(imgArr[0].src)

  return (
    <div className={classes['container']}>
      {/* {webentwicklung.map((item, index) => {
        return <li key={index}>{item.develop1}</li>
      })} */}
      {/* <Infobox /> */}
        {/* <div className={classes.pagination}>
          {webentwicklung.map((item, index) => {
            return <SliderDots key={index} index={index} active={current} onClick={selectSlidePerDot} />
          })}

        </div> */}
        <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
        <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
        
        {webentwicklung.map((item, index) => {
          return (
            <div className={index === current ? classes['slide-active'] : classes.slide} key={index}>
              {index === current && ( 
                <div className={classes['img-box']}>
                  <img src={imgArr[index].src} className={classes.image} key={index} alt={item.title}/> 
                </div>
              )}
            </div>
          )
        })}
    </div>

  );
}

export default Services
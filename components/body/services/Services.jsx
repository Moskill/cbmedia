import React, { useState } from 'react';
import {servicesData} from './servicesData';
import { TabData } from '../catTabs/TabData';
import classes from './Services.module.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import design1 from '../../../assets/xs/webdev/bildname1.jpg';
import design2 from '../../../assets/xs/webdev/bildname2.jpg';
import design3 from '../../../assets/xs/webdev/bildname3.jpg';
import design4 from '../../../assets/xs/webdev/bildname4.jpg';
import design5 from '../../../assets/xs/webdev/bildname5.jpg';

import develop1 from '../../../assets/xs/webdev/develop1.jpg';
import develop2 from '../../../assets/xs/webdev/develop2.jpg';
import develop3 from '../../../assets/xs/webdev/develop3.jpg';
import develop4 from '../../../assets/xs/webdev/develop4.jpg';
import develop5 from '../../../assets/xs/webdev/develop5.jpg';

const Services = (props) => {
  let imgArr = [design1, design2, design3, design4, design5];
  let servArr = ['webdesign', 'webentwicklung', 'logodesign', 'produktfotografie', 'mediendesign', 'consulting']; 
  
  const [currentService, setCurrentService] = useState(servArr && servArr.indexOf(props.state))
  const [current, setCurrent] = useState(0);
  const length = servicesData.length;


  // const filterArr = servicesData[servArr.indexOf(props.state)].filter((match) => {
  //   return props.state
  // })

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

  const nextService = () => {
    setCurrentService(currentService === length - 1 ? 0 : currentService + 1);
    props.onChangeService(servArr.indexOf(currentService))
  }
  const prevService = () => {
    setCurrentService(currentService === 0 ? length -1 : currentService - 1)
  }

  // console.log(servArr.indexOf(props.state))
  console.log(currentService)
  //console.log(servicesData[servArr.indexOf(props.state)].exsamples, 'FCIKENCENNCKEN')
  return (
    <>
      <div style={{backgroundColor: 'limegreen', height: '8rem', width: '100%', position: 'relative'}}>
      {/* {TabData.map((item, index) => {
        return <p className={classes['service-item']} onClick={() => props.onChangeService(item.link)}> - {item.link} </p>
      })} */}
      <span onClick={nextService}>P</span><p> {props.state}</p> <span onClick={prevService}>N</span>
      </div>
      <div className={classes['container']}>

          <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
          <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
          
          {servicesData[servArr.indexOf(props.state)].exsamples.map((item, index) => {
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
    </>
  );
}

export default Services
import React, { useState } from 'react';
import {servicesData} from './servicesData';
import { TabData } from '../catTabs/TabData';
import classes from './Services.module.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import ServiceImages from './ServiceImages';

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
  let servArr = ['webdesign', 'logodesign', 'produktfotografie', 'mediendesign']; 
  
  const [currentService, setCurrentService] = useState(servArr.indexOf(props.state))
  const [current, setCurrent] = useState(0);
  const length = props.images && props.images[currentService].length;

  // props.images && props.images[currentService].map((item, index) => {
  //   console.log(index)
  // })

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  }

  const nextService = () => {
    setCurrentService(currentService === servArr.length - 1 ? 0 : currentService + 1);
    props.onChangeService(servArr[currentService]);
  }
  const prevService = () => {
    setCurrentService(currentService === 0 ? servArr.length - 1 : currentService - 1)
    props.onChangeService(servArr[currentService]);
  }

  // console.log(servicesData[currentService].text)
  // console.log(servicesData[servArr.indexOf(props.state)])
  //console.log(servicesData[servArr.indexOf(props.state)].exsamples, 'FCIKENCENNCKEN')
  return (
    <>
      <div className={classes['service-pagination']}>
        <FaArrowLeft onClick={prevService} /><span className={classes['service-display']}> {servArr[currentService]}</span><FaArrowRight onClick={nextService} />
      </div>
        <p className={classes['service-text']}>{servicesData[currentService].text}</p>
      <div className={classes['container']}>

          <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
          <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
          
          {props.images && props.images[currentService].map((item, index) => {
            return (
              <div className={index === current ? classes['slide-active'] : classes.slide} key={index}>
                {index === current && ( 
                  
                  <div className={classes['img-box']}>
                    <ServiceImages service={currentService} index={index} alt={servArr[currentService]} image={props.images && props.images[currentService][index]}/>
                    {console.log(item)}
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
import React, { useEffect, useState } from 'react';
import {servicesData} from './servicesData';
import { TabData } from '../catTabs/TabData';
import classes from './Services.module.scss';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import ServiceImages from './ServiceImages';


const Services = (props) => {
  let servArr = ['webdesign', 'logodesign', 'produktfotos', 'mediendesign']; 
  
  const [currentService, setCurrentService] = useState(servArr.indexOf(props.service))
  const [current, setCurrent] = useState(servArr.indexOf(props.service));
  const length = props.images && props.images[currentService].length;
  console.log(servArr.indexOf(props.service))
  
  if(current === -1) setCurrent(0);
//  console.log(current)
  useEffect(() => {
    setCurrentService(servArr.indexOf(props.service));
  },[props.page, props.service])

  // useEffect(() => {
  //   setCurrent(0);
  // },[props.service])


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length -1 : current - 1)
  }

  const nextService = () => {
    props.onChangeService(servArr[currentService]);
    setCurrentService(currentService === servArr.length - 1 ? 0 : currentService + 1);
  }
  const prevService = () => {
    props.onChangeService(servArr[currentService]);
    setCurrentService(currentService === 0 ? servArr.length - 1 : currentService - 1)
  }

  
  // console.log(currentService && currentService)
  
  return (
    <>
      {/* <div className={classes['service-pagination']}>
        <FaArrowLeft onClick={prevService} />
          <span className={classes['service-display']}> {servArr[currentService]}</span>
        <FaArrowRight onClick={nextService} />
      </div> */}

        <div className={classes['container']}>
          <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
          <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
          
          {props.images && props.images[currentService].map((item, index) => {
            return (
              <div className={index === current ? classes['slide-active'] : classes.slide} key={index}>
                {index === current && ( 
                  
                  <div className={classes['img-box']}>
                    <ServiceImages service={currentService} index={index} alt={servArr[currentService]} image={props.images && props.images[currentService][index]}/>
                  </div>
                )}
              </div>
            )
          })}
          <p className={classes['service-text']}>{servicesData[currentService].text}</p>
          <div className={classes['btn-container']}>
            {servArr.map(item => {
              console.log(item)
              return <button className={classes['darkBtn']} onClick={() => props.onChangeService(item)}>{item}</button>
            })}
            
          </div>
      </div>
    </>
  );
}

export default Services
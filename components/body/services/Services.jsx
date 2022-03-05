import React, {useState} from 'react';
import {servicesData} from './servicesData';
import { TabData } from '../catTabs/TabData';
import classes from './Services.module.css';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';
import bildname1 from '../../../assets/xs/webdev/bildname1.jpg';
import bildname2 from '../../../assets/xs/webdev/bildname2.jpg';
import bildname3 from '../../../assets/xs/webdev/bildname3.jpg';
import bildname4 from '../../../assets/xs/webdev/bildname4.jpg';
import bildname5 from '../../../assets/xs/webdev/bildname5.jpg';

const Services = (props) => {
  

  const [current, setCurrent] = useState(0);
  const length = servicesData.length;

  let imgArr = [bildname1, bildname2, bildname3, bildname4, bildname5];
  let servArr = ['webdesign', 'webentwicklung', 'logodesign', 'produktfotografie', 'mediendesign', 'consulting']; 

  // const filterArr = servicesData.filter((item) => {
  //   return item.consulting == props.state
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

  // console.log(servArr.indexOf(props.state))
  // console.log(filterArr)
  console.log(servicesData[servArr.indexOf(props.state)], 'FCIKENCENNCKEN')
  return (
    <>
      <div style={{backgroundColor: 'limegreen', height: '8rem', width: '100%', position: 'relative'}}>
      {/* {TabData.map((item, index) => {
        return <p className={classes['service-item']} onClick={() => props.onChangeService(item.link)}> - {item.link} </p>
      })} */}
      <p>{props.state}</p>
      </div>
      <div className={classes['container']}>

          <FaArrowAltCircleLeft className={classes['left-arrow']} onClick={prevSlide}/>
          <FaArrowAltCircleRight className={classes['right-arrow']} onClick={nextSlide}/>
          
          {servicesData.map((item, index) => {
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
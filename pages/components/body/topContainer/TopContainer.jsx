import React, {useState} from 'react';
import classes from './TopContainer.module.css';
import Slider from '../slider/Slider';
import { SliderData } from '../slider/SliderData';

const TopContainer = () => {
  console.log(SliderData)

  const [containerContent, setContainerContent] = useState('slider');
  return (
    <>
      {SliderData.map((item, index) => 
        <Slider key={index} image={item.image} title={item.title} subtitle={item.subtitle} text={item.text} link={item.link}/>
      )}


      {/* <div className={`${classes.container} ${classes.development}`}>
        <div className={classes.containerTitle}>
          <div className={classes.someDiv}>Monagos in tha house</div>
        </div>
      </div> */}
    </>
  )
}

export default TopContainer
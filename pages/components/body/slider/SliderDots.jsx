import React from 'react';
import classes from './SliderDots.module.css';

const SliderDots = (props) => {
  return (
      <div className={props.index === props.active ? classes['slider-dot-active']  : classes['slider-dot']}></div>
  )
}

export default SliderDots
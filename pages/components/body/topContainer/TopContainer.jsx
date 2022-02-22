import React, {useState} from 'react';
import classes from './TopContainer.module.css';
import Slider from '../slider/Slider';
import { SliderData } from '../slider/SliderData';

const TopContainer = () => {
  // console.log(SliderData.length)

  const [containerContent, setContainerContent] = useState('slider');
  return (
    <>
      <Slider />
    </>
  )
}

export default TopContainer
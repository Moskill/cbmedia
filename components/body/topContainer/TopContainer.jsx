import React, {useState} from 'react';
import classes from './TopContainer.module.css';
import Slider from '../slider/Slider';
import { SliderData } from '../slider/SliderData';
import CallInfo from './CallInfo';


const TopContainer = (props) => {

  console.log(props, 'VERFICKTER TOPCONTAINER')

  const [containerContent, setContainerContent] = useState('slider');
  return (
    <>
      <CallInfo />
      <Slider service={props.service} onChangeService={props.onChangeService}/>
    </>
  )
}

export default TopContainer
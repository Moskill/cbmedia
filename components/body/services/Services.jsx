import React from 'react';
import {webentwicklung, webdesign} from './servicesData';
import classes from './Services.module.css';

const Services = () => {
  return (
    <div className={classes['container']}>
      {webentwicklung.map((item, index) => {
        return <li key={index}>{item.develop1}</li>
      })}
    </div>
  )
}

export default Services
import React from 'react';
import classes from './StackPart.module.scss';
import {FaReact, FaWordpress, FaNodeJs} from 'react-icons/fa';
import {SiMongodb, SiMysql} from 'react-icons/si';

const StackPart = () => {
  return (
    <>
    <div className={classes['container']}>
      <FaReact />
      <SiMongodb />
      <FaWordpress />
      <SiMysql />
      <FaNodeJs />
      </div>
    </>
  )
}

export default StackPart
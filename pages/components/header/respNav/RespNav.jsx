import React from 'react';
import classes from './RespNav.module.css';
import { GiHamburgerMenu } from 'react-icons/gi'

const RespNav = () => {
  return (
    <>
      <GiHamburgerMenu className={classes['burger-icon']}/>
    </>
  )
}

export default RespNav
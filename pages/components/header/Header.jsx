import React from 'react';
import classes from './Header.module.css';
import Logo from './logo/Logo';

const Header = () => {
  return (
    <div className={classes.wrapper}>
      <Logo />
    </div>
  )
}

export default Header
import React from 'react';
import classes from './Header.module.css';
import Logo from './logo/Logo';
import Navbar from './navigation/Navbar';

const Header = (props) => {
  return (
    <div className={classes.wrapper}>
      <Logo />
      <Navbar onChangeService={props.onChangeService} />
    </div>
  )
}

export default Header
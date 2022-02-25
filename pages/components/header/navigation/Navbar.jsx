import React from 'react';
import RespNav from '../respNav/RespNav';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <ul className={classes.container}>
        <li className={classes.navElement}>Home</li>
        <li className={classes.navElement}>Über Uns</li>
        <li className={classes.navElement}>Dienste</li>
        <li className={classes.navElement}>Referenzen</li>
        <li className={classes.navElement}>Kontakt</li>
      </ul>
      <RespNav />
    </>
  )
}

export default Navbar
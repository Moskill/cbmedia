import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.navElement}>Home</div>
        <div className={classes.navElement}>Über Uns</div>
        <div className={classes.navElement}>Dienste</div>
        <div className={classes.navElement}>Referenzen</div>
        <div className={classes.navElement}>Kontakt</div>
      </div>
    </>
  )
}

export default Navbar
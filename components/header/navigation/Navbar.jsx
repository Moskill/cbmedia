import React, { useState } from 'react';
import RespNav from '../respNav/RespNav';
import classes from './Navbar.module.scss';
import ExpandNav from './ExpandNav';

const Navbar = (props) => {

  const [showExpandNav, setShowExpandNav] = useState(true);
  //  console.log(showExpandNav)
  return (
    <>
      <ul className={classes.container}>
        <li className={classes.navElement} onClick={() => props.onChangeService('index')}>Home</li>
        <li className={classes.navElement} onMouseOver={() => setShowExpandNav(true)}>Dienste</li>
        <li className={classes.navElement}>Referenzen</li>
        <li className={classes.navElement}>Kontakt</li>
      </ul>

      {showExpandNav && 
        <ExpandNav 
          onExpandNav={setShowExpandNav} 
          onChangeService={props.onChangeService}  
        />
      }

    </>
  )
}

export default Navbar
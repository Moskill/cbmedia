import React, { useState } from 'react';
import RespNav from '../respNav/RespNav';
import classes from './Navbar.module.scss';
import ExpandNav from './ExpandNav';

const Navbar = (props) => {

  const [showExpandNav, setShowExpandNav] = useState(false);
   console.log(showExpandNav)
  return (
    <>
      <ul className={classes.container}>
        <li className={classes.navElement} onClick={() => props.onChangeService('Tittengucken')}>Home</li>
        <li className={classes.navElement} onMouseOver={() => setShowExpandNav(true)}>Dienste</li>
        <li className={classes.navElement}>Referenzen</li>
        <li className={classes.navElement}>Kontakt</li>
      </ul>

      {showExpandNav && <ExpandNav onExpandNav={setShowExpandNav} onChangeService={props.onChangeService}  />
      
      }
      {/* {showExpandNav && <div className={classes['expand-nav']} onClick={() => setShowExpandNav(false)}>
        <ul onClick={() => setShowExpandNav(false)}>
          <li>Webdesign</li>
          <li>Webentwicklung</li>
          <li>Logodesign</li>
          <li>Produktfotos</li>
          <li>Mediendesign</li>
          <li>Beratung</li>
        </ul>
      </div>
      } */}
    </>
  )
}

export default Navbar
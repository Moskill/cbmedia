import React, { useState } from 'react';
import classes from './RespNav.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import RespNavOverlay from './RespNavOverlay';



const RespNav = () => {

  const [respOverlayOpen, setRespOverlayOpen] = useState(false);
  const [showBurgerIcon, setShowBurgerIcon] = useState(true);

  const openOverlayHandler = () => {
    respOverlayOpen === false ? setRespOverlayOpen(true) : setRespOverlayOpen(false);
    showBurgerIcon === true ? setShowBurgerIcon(false) : setShowBurgerIcon(true);
    console.log(showBurgerIcon)
  }

  return (
    <>
      {!showBurgerIcon && <RespNavOverlay onOverlayOpen={openOverlayHandler} />}
      {showBurgerIcon && <GiHamburgerMenu className={classes['burger-icon']} onClick={() => openOverlayHandler()}/>} 
    </>
  )
}

export default RespNav
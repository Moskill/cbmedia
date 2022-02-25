import React, { useState } from 'react';
import classes from './RespNav.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import RespNavOverlay from './RespNavOverlay';



const RespNav = () => {

  const [respOverlayOpen, setRespOverlayOpen] = useState(false);

  // const openOverlayHandler = () => {
  //   RespNavOverlay === true ? setRespOverlayOpen(false) : setRespOverlayOpen(true);
  //   console.log(respOverlayOpen, 'onClick')
  // }
  console.log(setRespOverlayOpen)

  return (
    <>
      {respOverlayOpen && <RespNavOverlay setRespOverlayOpen={setRespOverlayOpen} />}
      <GiHamburgerMenu className={classes['burger-icon']} onClick={() => setRespOverlayOpen(true)}/>
    </>
  )
}

export default RespNav
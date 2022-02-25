import React from 'react';
import classes from './RespNavOverlay.module.css';
import { FaRegWindowClose } from 'react-icons/fa';

const RespNavOverlay = (props) => {

  return (
    <>
      <div className={classes['icon-container']} onClick={props.onOverlayOpen}>
        <FaRegWindowClose onClick={props.onOverlayOpen}/>
      </div>
      <div className={classes['container']}></div>
    </>
  )
}

export default RespNavOverlay
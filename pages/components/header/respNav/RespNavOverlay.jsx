import React from 'react';
import classes from './RespNavOverlay.module.css';
import { FaRegWindowClose } from 'react-icons/fa';

const RespNavOverlay = (props) => {

  console.log(props)
  return (
    <>
      <FaRegWindowClose onClick={() => props.setRespOverlayOpen(false)}/>
      <div className={classes['container']}>RespNavOverlay</div>
    </>
  )
}

export default RespNavOverlay
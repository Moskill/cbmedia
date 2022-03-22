import React from 'react';
import classes from './RespNavOverlay.module.css';
import { FaRegWindowClose } from 'react-icons/fa';
import Link from 'next/link';

const RespNavOverlay = (props) => {

  const onClickHandler = (e) => {
    props.onOverlayOpen();
    props.onChangeService(e.target.id)
    switch(e.target.id) {
      case 'about':
        props.onOverlayOpen();
        props.onChangeService(e.target.id)
      break;  
      case 'service':
        props.onOverlayOpen();
      break;  
      case 'kontakt':
        props.onOverlayOpen();
        props.onChangeService(e.target.id)
      break;  
      case 'impressum':
        props.onOverlayOpen();
        props.onChangeService(e.target.id)
      break;  

    }
  }

  return (
    <>
      <div className={classes['icon-container']} onClick={props.onOverlayOpen}>
        <FaRegWindowClose onClick={props.onOverlayOpen}/>
      </div>
      <div className={classes['container']}>
        <ul>
          <li onClick={props.onOverlayOpen}>
            <Link href="/">
              <a className={classes['router-link']}>Home</a>
            </Link>
          </li>
          <li onClick={onClickHandler}>
              <a id='about' className={classes['router-link']}>Über uns</a>
          </li>
          <li onClick={onClickHandler}>
              <a href='#service' id='service' className={classes['router-link']}>Services</a>
          </li>
          <li onClick={onClickHandler}>
              <a id='kontakt' className={classes['router-link']}>Kontakt</a>
          </li>
          <li onClick={onClickHandler}>
              <a id='impressum' className={classes['router-link']}>Impressum</a>
          </li>
        </ul>
      </div>
    </>










  )
}

export default RespNavOverlay
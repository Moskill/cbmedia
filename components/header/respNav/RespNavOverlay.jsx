import React from 'react';
import classes from './RespNavOverlay.module.css';
import { FaRegWindowClose } from 'react-icons/fa';
import Link from 'next/link';

const RespNavOverlay = (props) => {

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
          <li onClick={props.onOverlayOpen}>
            <Link href="/about">
              <a className={classes['router-link']}>Über uns</a>
            </Link>
          </li>
          <li onClick={props.onOverlayOpen}>
            <Link href="/Referenzen">
              <a className={classes['router-link']}>Referenzen</a>
            </Link>
          </li>
          <li onClick={props.onOverlayOpen}>
            <Link href="/Services">
              <a className={classes['router-link']}>Services</a>
            </Link>
          </li>
          <li onClick={props.onOverlayOpen}>
            <Link href="/Kontakt">
              <a className={classes['router-link']}>Kontakt</a>
            </Link>
          </li>
          <li onClick={props.onOverlayOpen}>
            <Link href="/impressum">
              <a className={classes['router-link']}>Impressum</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default RespNavOverlay
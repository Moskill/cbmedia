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
          <li>
            <Link href="/">
              <a className={classes['router-link']}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className={classes['router-link']}>About Us</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/hello-world">
              <a className={classes['router-link']}>Blog Post</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default RespNavOverlay
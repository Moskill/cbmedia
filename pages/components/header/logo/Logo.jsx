import React from 'react';
import classes from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.bigFont}>
          <span className={classes.bigText1}>CB</span>
          <span className={classes.bigText2}>MEDIA</span>
        </div>
    <br/>
        <div className={classes.smallFont}>
          <span className={classes.smallText1}>design & </span>
          <span className={classes.smallText2}>entwicklung</span>
        </div>
      </div>
    </>
  )
}

export default Logo
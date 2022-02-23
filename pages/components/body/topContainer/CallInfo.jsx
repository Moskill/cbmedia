import React from 'react';
import classes from './CallInfo.module.css';
import {GiRotaryPhone} from 'react-icons/gi';


const CallInfo = () => {
  return (
    <>
      <div className={classes['wrapper']}>Rufen Sie jetzt an!
      <br/>
      <div className={classes['phone-info-wrapper']}>
        <GiRotaryPhone className={classes['phone-icon']} />
        <p className={classes['callinfo-paragraph']}>
        &nbsp;   01522 - 21 69 47 0
        </p>
      </div>
      </div>
    </>
  )
}

export default CallInfo
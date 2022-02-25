import React, { useState } from 'react';
import classes from './CallInfo.module.css';
import {GiRotaryPhone} from 'react-icons/gi';


const CallInfo = () => {

  const [callinfoIsActive, setCallinfoIsActive] = useState(false);

  return (
    <>
      {!callinfoIsActive && <div className={classes['wrapper-inactive']} onClick={() => setCallinfoIsActive(true)}>
          <div className={classes['callinfo-inactive']}><GiRotaryPhone /></div>
        </div>}

      {callinfoIsActive && <div className={classes['wrapper']} onClick={() => setCallinfoIsActive(false)}>
        <div className={classes['hotline-img']}></div>
        Rufen Sie jetzt an!
      <br/>
      <div className={classes['phone-info-wrapper']}>
        <GiRotaryPhone className={classes['phone-icon']} />
        <p className={classes['callinfo-paragraph']}>
        &nbsp;   01522 - 21 69 47 0
        </p>
      </div>
      </div>}

    </>
  )
}

export default CallInfo
import React from 'react';
import classes from './SingleTab.module.css';
import {MdDesignServices} from 'react-icons/md';
import {MdPhotoCamera} from 'react-icons/md';
import {MdSupportAgent} from 'react-icons/md';
import {FaCode} from 'react-icons/fa';
import {IoImages} from 'react-icons/io5';
import {VscFileMedia} from 'react-icons/vsc';

const SingleTab = (props) => {
  let tabIcon = '';
  switch (props.image) {
    case 'webdesign':
      tabIcon = <MdDesignServices className={classes['tab-icon']}/>
      break;
    case 'webentwicklung':
      tabIcon = <FaCode className={classes['tab-icon']}/>
      break;
    case 'logodesign':
      tabIcon = <IoImages className={classes['tab-icon']}/>
      break;
    case 'produktfotografie':
      tabIcon = <MdPhotoCamera className={classes['tab-icon']}/>
      break;
    case 'mediendesign':
      tabIcon = <VscFileMedia className={classes['tab-icon']}/>
      break;
    case 'consulting':
      tabIcon = <MdSupportAgent className={classes['tab-icon']}/>
      break;
  }
  return (
    <div className={classes.container} key={props.key}>
      <div className={classes['tab-body']} >
        {tabIcon}
        <h1>{props.title}</h1>
        <h4>{props.subtile}</h4>
        <div className={classes['text-box']}>
          <div>{props.text}</div>
        </div>
      </div>
    </div>
  )
}

export default SingleTab
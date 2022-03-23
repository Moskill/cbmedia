import React from 'react';
import classes from './SingleTab.module.scss';
import {MdDesignServices, MdPhotoCamera, MdSupportAgent} from 'react-icons/md';
import {FaCode} from 'react-icons/fa';
import {IoImages} from 'react-icons/io5';
import {VscFileMedia} from 'react-icons/vsc';

const SingleTab = (props) => {


  // console.log(props)
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
    case 'produktfotos':
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
    <>
      <div className={classes.container} >
        <div className={classes['tab-body']} >
          {tabIcon}
          <h1>{props.title}</h1>
          <h4>{props.subtile}</h4>
          <div className={classes['text-box']}>
            <p className={classes['tab-text']}>{props.text}</p>
          </div>
          <div className={classes['tab-btn-container']}>
            {props.link !== 'webentwicklung' && props.link !== 'consulting' && 
              <button className={classes['darkBtn']} onClick={() => props.onChangeService(props.link)}>Beispiele</button>
            }
            <button className={classes['lightBtn']}><a href='#kontakt'>Kontakt</a></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleTab
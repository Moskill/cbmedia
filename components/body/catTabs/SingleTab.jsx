import React from 'react';
import classes from './SingleTab.module.scss';
import {MdDesignServices, MdPhotoCamera, MdSupportAgent} from 'react-icons/md';
import {FaCode} from 'react-icons/fa';
import {IoImages} from 'react-icons/io5';
import {VscFileMedia} from 'react-icons/vsc';
import consulting from '../../../assets/xs/consulting.jpg';
import webdesign from '../../../assets/xs/webdesign.jpg';
import webentwicklung from '../../../assets/xs/webentwicklung.jpg';
import logodesign from '../../../assets/xs/logodesign.jpg';
import mediendesign from '../../../assets/xs/mediendesign.jpg';
import produktfotografie from '../../../assets/xs/produktfotografie.jpg';

const SingleTab = (props) => {
  let tabIcon = '';
  let tabImg = '';
  // let divStyle= {
  //   backgroundImage: "url(" + `${consulting}` + ")"
  // }

  switch (props.image) {
    case 'webdesign':
      tabIcon = <MdDesignServices className={classes['tab-icon']}/>
      tabImg = webdesign;
      break;
    case 'webentwicklung':
      tabIcon = <FaCode className={classes['tab-icon']}/>
      tabImg = webentwicklung;
      break;
    case 'logodesign':
      tabIcon = <IoImages className={classes['tab-icon']}/>
      tabImg = logodesign;
      break;
    case 'produktfotografie':
      tabIcon = <MdPhotoCamera className={classes['tab-icon']}/>
      tabImg = produktfotografie;
      break;
    case 'mediendesign':
      tabIcon = <VscFileMedia className={classes['tab-icon']}/>
      tabImg = mediendesign;
      break;
    case 'consulting':
      tabIcon = <MdSupportAgent className={classes['tab-icon']}/>
      tabImg = consulting;
      break;
  }


  return (
    <>
      <div className={classes.container} key={props.key}>
        <div className={classes['tab-body']} >
          {tabIcon}
          <h1>{props.title}</h1>
          <h4>{props.subtile}</h4>
          <div className={classes['text-box']}>
            <p className={classes['tab-text']}>{props.text}</p>
          </div>
          <div className={classes['tab-btn-container']}>
            <button className={classes['darkBtn']}>Beispiele</button>
            <button className={classes['lightBtn']}>Kontakt</button>
          </div>
        </div>
        {/* <img src={tabImg.src} className={classes['overlay-img']}/> */}
      {/* <div className={classes['overlay-img']}></div> */}
      </div>
    </>
  )
}

export default SingleTab
import React from 'react';
import classes from './ExpandNav.module.scss';

const ExpandNav = (props) => {

  const changesHandler = (e) => {
    console.log(e.target.id);
    props.onChangeService(e.target.id)
    props.onExpandNav(false);
  }


  return (
    <>
      <div className={classes['expand-nav']}>
        <ul >
          <li onClick={changesHandler}><a id='webdesign' href='#service'>Webdesign</a></li>
          {/* <li onClick={() => props.onExpandNav(false)}><a id='webentwicklung' onClick={() => props.onChangeService('webentwicklung')}>Webentwicklung</a></li> */}
          <li onClick={() => props.onExpandNav(false)}><a id='logodesign' href='#service' onClick={() => props.onChangeService('logodesign')}>Logodesign</a></li>
          <li onClick={() => props.onExpandNav(false)}><a id='produktfotos' href='#service' onClick={() => props.onChangeService('produktfotos')}>Produktfotos</a></li>
          <li onClick={() => props.onExpandNav(false)}><a id='mediendesign' href='#service' onClick={() => props.onChangeService('mediendesign')}>Mediendesign</a></li>
          {/* <li onClick={() => props.onExpandNav(false)}><a id='consulting' onClick={() => props.onChangeService('consulting')}>Beratung</a></li> */}
        </ul>
      </div>
      <div className={classes['closing-overlay']} onMouseOver={() => props.onExpandNav(false)}></div>
    </>
  )
}

export default ExpandNav
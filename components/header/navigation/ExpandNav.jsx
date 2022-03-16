import React from 'react';
import classes from './ExpandNav.module.scss';

const ExpandNav = (props) => {

  console.log(props)

  return (
    <>
      <div className={classes['expand-nav']}>
        <ul >
          <li><a href='#service' onClick={() => props.onChangeService('webdesign')}> Webdesign</a></li>
          <li><a href='#service' onClick={() => props.onChangeService('webentwicklung')}>Webentwicklung</a></li>
          <li><a href='#service' onClick={() => props.onChangeService('logodesign')}>Logodesign</a></li>
          <li><a href='#service' onClick={() => props.onChangeService('produktfotos')}>Produktfotos</a></li>
          <li><a href='#service' onClick={() => props.onChangeService('mediendesign')}>Mediendesign</a></li>
          <li><a href='#service' onClick={() => props.onChangeService('consulting')}>Beratung</a></li>
        </ul>
      </div>
      <div className={classes['closing-overlay']} onMouseOver={() => props.onExpandNav(false)}></div>
    </>
  )
}

export default ExpandNav
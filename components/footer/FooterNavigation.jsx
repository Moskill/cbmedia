import React from 'react';
import classes from './FooterNavigation.module.css';

const FooterNavigation = (props) => {
  return (
    <div className={classes['container']}>
    
        <div onClick={() => props.onChangeService('datenschutz')} >Datenschutzerklärung</div>
        <div>Link 2</div>
        <div>Link 3</div>
      
    </div>


  )
}

export default FooterNavigation
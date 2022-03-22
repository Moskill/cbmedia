import React from 'react';
import classes from './FooterNavigation.module.scss';

const FooterNavigation = (props) => {
  return (
    <div className={classes['container']}>
    
        <a href='#' onClick={() => props.onChangeService('datenschutz')} >Datenschutzerklärung</a>
        <a href='#' onClick={() => props.onChangeService('impressum')}>Impressum</a>
        <a href='#' onClick={() => props.onChangeService('support')}>Support</a>
      
    </div>


  )
}

export default FooterNavigation
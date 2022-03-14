import React from 'react';
import classes from './ExpandNav.module.scss';

const ExpandNav = (props) => {
  return (
        <div className={classes['expand-nav']}>
          <ul >
            <li>Webdesign</li>
            <li>Webentwicklung</li>
            <li>Logodesign</li>
            <li>Produktfotos</li>
            <li>Mediendesign</li>
            <li>Beratung</li>
          </ul>
        </div>
  )
}

export default ExpandNav
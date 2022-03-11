import React from 'react';
import classes from './Infobox.module.scss';

const Infobox = (props) => {
  return (
    <>
      <div className={classes['slider-infobox']}>
      <h1 className={classes['fo-26']}>{props.data.title}</h1>
      <span className={classes['slider-subtitle']}>{props.data.subtitle}</span>
      <p>{props.data.text}</p>
      <div className={classes['slider-btn-box']}>
        <button className={classes['darkBtn']}>Kontakt</button>
        <button className={classes['lightBtn']}>Beispiele</button>
      </div>
    </div>
  </>
  )
}

export default Infobox
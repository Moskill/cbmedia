import React from 'react';
import classes from './Infobox.module.css';

const Infobox = (props) => {
  return (
    <>
      <div className={classes['slider-infobox']}>
      <h1>{props.data.title}</h1>
      <span className={classes['slider-subtitle']}>{props.data.subtitle}</span>
      <p>{props.data.text}</p>
      <div className={classes['slider-btn-box']}>
        <button>Kontakt</button>
        <button>Beispiele</button>
      </div>
    </div>
  </>
  )
}

export default Infobox
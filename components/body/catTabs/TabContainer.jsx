import React from 'react';
import classes from './TabContainer.module.css';
import SingleTab from './SingleTab';
import { TabData } from './TabData';

const TabContainer = (props) => {
  return (
    <>
      <div className={classes.container}>

        {/* <h1>Suchmaschienenfreundlich</h1>
        <h1>Benutzerfreundlich</h1>
        <h1>Individuell</h1>
        <h1>Für Mobile optimiert</h1> */}
        {TabData && TabData.map((item, index) => {
          // {console.log(item.title)}
          return <SingleTab image={item.image} title={item.title} subtile={item.subtitle} link={item.link} text={item.shortDesc} imgUrl={`../../../assets/xs/${item.image}.jpg`} onChangeService={props.onChangeService} service={props.service}/>
        })}
      </div>
    </>
  )
}

export default TabContainer
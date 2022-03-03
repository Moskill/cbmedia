import React from 'react';
import classes from './TabContainer.module.css';
import SingleTab from './SingleTab';
import { TabData } from './TabData';

const TabContainer = () => {
console.log(TabData)
  return (
    <>
      <div className={classes.container}>
        {TabData && TabData.map((item, index) => {
          {console.log(item.title)}
          return <SingleTab key={index} image={item.image} title={item.title} subtile={item.subtitle} link={item.link} text={item.text} imgUrl={`../../../assets/xs/${item.image}.jpg`} />
        })}
      </div>
    </>
  )
}

export default TabContainer
import React from 'react';
import classes from './TabContainer.module.css';
import SingleTab from './SingleTab';

const TabContainer = () => {

  return (
    <>
      <div className={classes.container}>
        <SingleTab />
        <SingleTab />
        <SingleTab />
        <SingleTab />
        <SingleTab />
        <SingleTab />
      </div>
    </>
  )
}

export default TabContainer
import React from 'react';
import classes from '../styles/Home.module.css';
import Header from '../components/header/Header';
import TopContainer from '../components/body/topContainer/TopContainer';
import RespNav from '../components/header/respNav/RespNav';
import HTMLHead from '../components/HTMLHead';
import Webdesign from './body/services/webdesign/Webdesign';
import TabContainer from './body/catTabs/TabContainer';

const Layout = ({children}) => {
  return (
    <div className={classes.container}>
      <HTMLHead />
      <main className={classes.main}>
        <RespNav />
        <Header />
        <TopContainer />
        <TabContainer />

      </main>
      <footer className={classes.footer}>
        <span className={classes.logo}>
          <h3>HIER IST DER FOOTER</h3>
        </span>
      </footer>
    </div>
  )
}

export default Layout
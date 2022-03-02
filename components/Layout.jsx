import React from 'react';
import classes from '../styles/Home.module.scss';
import Header from '../components/header/Header';
import TopContainer from '../components/body/topContainer/TopContainer';
import RespNav from '../components/header/respNav/RespNav';
import HTMLHead from '../components/HTMLHead';
import Webdesign from './body/services/webdesign/Webdesign';
import TabContainer from './body/catTabs/TabContainer';

const Layout = ({children}) => {

  const scrollFunc = (e) => {
    console.log(e);
  }
  return (
    <div className={classes.container} onScroll={scrollFunc}>
      <HTMLHead />
      <main className={classes.main}>
        <section>
          <RespNav />
          <Header />
          <TopContainer />
        </section>
        <section>
          <TabContainer />
        </section>
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
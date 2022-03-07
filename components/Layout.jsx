import React, { useState } from 'react';
import classes from '../styles/Home.module.scss';
import Header from '../components/header/Header';
import TopContainer from '../components/body/topContainer/TopContainer';
import RespNav from '../components/header/respNav/RespNav';
import HTMLHead from '../components/HTMLHead';
import TabContainer from './body/catTabs/TabContainer';
import Services from './body/services/Services';
import Footer from './footer/Footer';

const Layout = ({children}) => {

  const [service, setService] = useState('webdesign');

  return (
    <div className={classes.container}>
      <HTMLHead />
      <main className={classes.main}>
          <RespNav />
          <Header />
        <section id='top'>
          <TopContainer />
        </section>
        <section id='tabs'>
          <TabContainer />
        </section>
        <section id='service'>
          <Services state={service} onChangeService={setService} />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
      {/* <footer className={classes.footer}>
        <span className={classes.logo}>
          <h3>HIER IST DER FOOTER</h3>
        </span>
      </footer> */}
    </div>
  )
}

export default Layout
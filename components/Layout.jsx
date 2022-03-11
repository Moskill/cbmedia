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
  const [page, setPage] = useState('index');
  console.log(service, 'Layout')

  return (
    <div className={classes.container}>
      <HTMLHead />
      <main className={classes.main}>
          <RespNav onChangeService={setService} />
          <Header onChangeService={setService}  />
        <section id='top'>
          <TopContainer />
        </section>
        {page === 'index' && (
          <>
            <section id='tabs'>
              <TabContainer />
            </section>
            <section id='service'>
              <Services state={service} onChangeService={setService} />
            </section>
            <section id="footer">
              <Footer />
            </section>
          </>
        )}
        {page === 'about' && (
          <>
            <h1>Hello World</h1>
          </>
        )}


      </main>
    </div>
  )
}

export default Layout
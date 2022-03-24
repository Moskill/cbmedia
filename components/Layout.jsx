import React, { useState, useEffect, useRef } from 'react';
import classes from '../styles/Home.module.scss';
import Header from '../components/header/Header';
import TopContainer from '../components/body/topContainer/TopContainer';
import RespNav from '../components/header/respNav/RespNav';
import HTMLHead from '../components/HTMLHead';
import TabContainer from './body/catTabs/TabContainer';
import Services from './body/services/Services';
import Footer from './footer/Footer';
import useSWR from 'swr';
import Impressum from './Impressum';
import Datenschutz from './Datenschutz';

const Layout = ({children}) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles', fetcher);

  const [service, setService] = useState('webdesign');
  const [page, setPage] = useState('index');

  const [serviceRef, footRef] = useRef(null);

  const scrollDownFunc = () => {
    serviceRef.current.scrollIntoView({ behavior: 'smooth' })
  }

// console.log(service)

  useEffect(async () => {
    try{ 
        switch(service) {
        case 'webentwicklung':
          setPage('webentwicklung');
        break;
        case 'consulting':
          setPage('consulting');
        break;
        case 'widerruf':
          setPage('widerruf')
        break;
        case 'datenschutz':
          setPage('datenschutz');
        break;
        case 'about':
          setPage('about');
        break;
        case 'kontakt':
          setPage('kontakt');
        break;
        case 'impressum':
          setPage('impressum');
        break;
        default: 
          setPage('index');
        break;
      }
    } catch(e) {
      console.log(e);
    }
  }, [service])

  return (
    <div className={classes.container} name='layout'>
      <HTMLHead />
      <main className={classes.main}>
          <RespNav onChangeService={setService} service={service}  />
          <Header 
            onChangeService={setService} 
            onChangePage={setPage} 
            onScrollFunc={scrollDownFunc}
          />
        {page === 'index' && (
          <>
            <section id='top'>
              <TopContainer
                service={service} 
                onChangeService={setService} 
              />
            </section>
            <section id='tabs'>
              <TabContainer 
                service={service} 
                onChangeService={setService}
              />
            </section>
            <section id='service' ref={serviceRef}>
              <Services 
                id='services' 
                service={service} 
                onChangeService={setService} 
                images={data && data} 
                page={page}
              />
            </section>
            <section id="footer" ref={footRef}>
              <Footer  
                state={service} 
                onChangeService={setService} 
                images={data}
              />
            </section>
          </>
        )}
        {page === 'consulting' && (
          <>
            <div className={classes.container}>
              <h1>.</h1>
              <h1>.</h1>
              <h1>.</h1>
              <h1>Hier kommt {service}</h1>
            </div>
          </>
        )}
        {page === 'webentwicklung' && (
          <>
            <div className={classes.container}>
              <h1>.</h1>
              <h1>.</h1>
              <h1>.</h1>
              <h1>Hier kommt {service}</h1>
            </div>
          </>
        )}
        {page === 'impressum' && (
          <Impressum />
        )}
        {page === 'datenschutz' && (
          <Datenschutz />
        )}


      </main>
    </div>
  )
}

export default Layout
import React, { useState, useEffect } from 'react';
import classes from '../styles/Home.module.scss';
import Header from '../components/header/Header';
import TopContainer from '../components/body/topContainer/TopContainer';
import RespNav from '../components/header/respNav/RespNav';
import HTMLHead from '../components/HTMLHead';
import TabContainer from './body/catTabs/TabContainer';
import Services from './body/services/Services';
import Footer from './footer/Footer';
import useSWR from 'swr';

const Layout = ({children}) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles', fetcher);

  const [service, setService] = useState('webdesign');
  const [page, setPage] = useState('index');

  console.log(service);

  useEffect(() => {
  switch(service) {
    case 'webentwicklung':
      setPage('webentwickung');
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
    default: 
    setPage('index');
  }
  }, [service])



  return (
    <div className={classes.container}>
      <HTMLHead />
      <main className={classes.main}>
          <RespNav onChangeService={setService} />
          <Header onChangeService={setService}  />
        {page === 'index' && (
          <>
            <section id='top'>
              <TopContainer />
            </section>
            <section id='tabs'>
              <TabContainer />
            </section>
            <section id='service'>
              <Services id='services' state={service} onChangePage={setPage} onChangeService={setService} images={data}/>
            </section>
            <section id="footer">
              <Footer />
            </section>
          </>
        )}
        {page === 'consulting' && (
          <>
            {/* {!data && "Loading..."}
            {data && data.map(catPath => 
            catPath.map(imgPath => <img src={imgPath} alt=""/>))} */}
          </>
        )}


      </main>
    </div>
  )
}

export default Layout
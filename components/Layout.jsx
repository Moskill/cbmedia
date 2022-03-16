import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import classes from '../styles/Home.module.scss';
import Header from '../components/header/Header';
import TopContainer from '../components/body/topContainer/TopContainer';
import RespNav from '../components/header/respNav/RespNav';
import HTMLHead from '../components/HTMLHead';
import TabContainer from './body/catTabs/TabContainer';
import Services from './body/services/Services';
import Footer from './footer/Footer';
import useSWR from 'swr';

// const imgLoader = ({ src, width, quality }) => {
//   return `http://prepper-survial.org/${src}?w=${width}&q=${quality || 75}`
// }
const Layout = ({children}) => {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR('/api/readfiles', fetcher);

  const [service, setService] = useState('webdesign');
  const [page, setPage] = useState('index');

  console.log(service)

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
              <Services id='services' state={service} onChangeService={setService} images={data}/>
            </section>
            <section id="footer">
              <Footer />
            </section>
          </>
        )}
        {page === 'about' && (
          <>
            {!data && "Loading..."}
            {data && data.map(catPath => 
            catPath.map(imgPath => <img src={imgPath} alt=""/>))}
          </>
        )}


      </main>
    </div>
  )
}

export default Layout
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

// const imgLoader = ({ src, width, quality }) => {
//   return `http://prepper-survial.org/${src}?w=${width}&q=${quality || 75}`
// }
const Layout = ({children}) => {
  useEffect(() => {
    fetch("http://localhost:3000/api/")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  
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
            <Image 
            style={{position: 'absolute'}}
              src="logo5.jpg"
              alt="Picture of the author"
              // width={400}
              // height={300}
              layout='fill'
            />
          </>
        )}


      </main>
    </div>
  )
}

export default Layout
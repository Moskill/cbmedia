import React from 'react';
import classes from '../styles/Home.module.scss';

const Impressum = () => {
  return (
    <>
    <div className={classes['impressum-container']}>
      <div className={classes['text-block']}>
        <h1>Impressum </h1>
        <h2>Angaben gemäß §5 TMG </h2>
        <p>
          <b>CB Media</b><br/>
          Inh. Christian Borek<br/>
          Grünstr. 34<br/>
          21481 Lauenburg<br/><br/>
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 01522 - 22 16 94 70<br/>
          eMail: info[at]cb-media.info<br/>
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
DE96150484238</p>

        <h2>EU-Streitschlichtung</h2>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
<a href='https://ec.europa.eu/consumers/odr/'> https://ec.europa.eu/consumers/odr/.</a>
Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>

        <h2>Verbraucherbeilegung/Universalschlichtstelle</h2>
        <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
Verbraucherschlichtungsstelle teilzunehmen.</p>

        <p>
          <b>Quelle:</b><br/>
          <a href='https://www.e-recht24.de'>https://www.e-recht24.de</a>
        </p>

      </div>
    </div>
  </>
  )
}

export default Impressum
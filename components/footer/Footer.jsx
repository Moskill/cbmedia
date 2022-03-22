import React from 'react';
import classes from './Footer.module.css';
import { FaFacebookF, FaWhatsapp, FaDiscord, FaLinkedinIn } from 'react-icons/fa';
import FooterNavigation from './FooterNavigation';


const Footer = (props) => {
  return (
    <div className={classes.container} id='kontakt'>
      <div className={classes['footer-wrapper']}>
        <h1>Kontakt</h1>
        <form className={classes['contact-form']} id='msg-form'>
          <div className={classes['form-item']}>
            <label htmlFor='name'>Name</label><br/>
            <input type='text' name='name'/>
          </div>

          <div className={classes['form-item']}>
            <label htmlFor='firma'>Firma</label><br/>
            <input type='text'  name='firma'/>
          </div>

          <div className={classes['form-item']}>
            <label htmlFor='email'>eMail-Adresse</label><br/>
            <input type='email' name='email' />
          </div>

          <div className={classes['form-item']}>
            <label htmlFor='betreff'>Betreff</label><br/>
            <select className={classes['form-dropdown']}>
              <option>Webdesign</option>  
              <option>Webentwicklung</option>  
              <option>Logodesign</option>  
              <option>Mediendesign</option>  
              <option>Produktfotografie</option>  
              <option>Beratung</option>  
              <option>Anderes Thema</option>  
            </select>
          </div>

          <div className={classes['form-item']} id='message-text'>
            <label htmlFor='message'>Nachricht</label><br/>
            <textarea  />
          </div>
        </form>
            <button className={classes['form-submit-btn']} type='submit' form='msg-form'>Absenden</button>
        <hr/>
        <div className={classes['social-bar']}>
          <FaFacebookF className={classes['social-icon']} id='facebook' />
          <FaWhatsapp className={classes['social-icon']} id='whatsapp' />
          <FaDiscord className={classes['social-icon']} id='discord' />
          <FaLinkedinIn className={classes['social-icon']} id='linkedin' />
        <span>Tel: 0152 - 22 16 94 70</span>
        </div>
        <FooterNavigation onChangeService={props.onChangeService} />
      </div>
    </div>
  )
}

export default Footer
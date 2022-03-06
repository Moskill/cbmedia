import React from 'react';

import design1 from '../../../assets/xs/webdev/bildname1.jpg';
import design2 from '../../../assets/xs/webdev/bildname2.jpg';
import design3 from '../../../assets/xs/webdev/bildname3.jpg';
import design4 from '../../../assets/xs/webdev/bildname4.jpg';
import design5 from '../../../assets/xs/webdev/bildname5.jpg';

import develop1 from '../../../assets/xs/webdev/develop1.jpg';
import develop2 from '../../../assets/xs/webdev/develop2.jpg';
import develop3 from '../../../assets/xs/webdev/develop3.jpg';
import develop4 from '../../../assets/xs/webdev/develop4.jpg';
import develop5 from '../../../assets/xs/webdev/develop5.jpg';

// import logo1 from '../../../assets/xs/webdev/logo1.jpg';
// import logo2 from '../../../assets/xs/webdev/logo2.jpg';
// import logo3 from '../../../assets/xs/webdev/logo3.jpg';
// import logo4 from '../../../assets/xs/webdev/logo4.jpg';
// import logo5 from '../../../assets/xs/webdev/logo5.jpg';

// import photo1 from '../../../assets/xs/webdev/photo1.jpg';
// import photo2 from '../../../assets/xs/webdev/photo2.jpg';
// import photo3 from '../../../assets/xs/webdev/photo3.jpg';
// import photo4 from '../../../assets/xs/webdev/photo4.jpg';
// import photo5 from '../../../assets/xs/webdev/photo5.jpg';

// import media1 from '../../../assets/xs/webdev/media1.jpg';
// import media2 from '../../../assets/xs/webdev/media2.jpg';
// import media3 from '../../../assets/xs/webdev/media3.jpg';
// import media4 from '../../../assets/xs/webdev/media4.jpg';
// import media5 from '../../../assets/xs/webdev/media5.jpg';

// import consult1 from '../../../assets/xs/webdev/consult1.jpg';
// import consult2 from '../../../assets/xs/webdev/consult2.jpg';
// import consult3 from '../../../assets/xs/webdev/consult3.jpg';
// import consult4 from '../../../assets/xs/webdev/consult4.jpg';
// import consult5 from '../../../assets/xs/webdev/consult5.jpg';

const ServiceImages = (props) => {

  
  const imgArr = {
    webdesign: [design1, design2, design3, design4, design5],
    development: [develop1, develop2, develop3, develop4, develop5],
    // logo: [logo1, logo2, logo3, logo4, logo5],
    // photo: [photo1, photo2, photo3, photo4, photo5],
    // media: [media1, media2, media3, media4, media5],
    // consult: [consult1, consult2, consult3, consult4, consult5]
  }

  const imgList = Object.entries(imgArr);
  
  // console.log(imgList[props.index])
  console.log(props)
  return (
    <>
      <img src={imgList[props.index]} alt={props.alt}/> 
    </>
  )
}

export default ServiceImages
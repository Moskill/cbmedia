import React from 'react';

const ServiceImages = (props) => {

  console.log(props)

  return (
    <>

      <img src={props.image} alt={props.alt}/> 
    </>
  )
}

export default ServiceImages
import React from 'react';
import classes from '../styles/SiteSitting.module.scss';
import Header from './header/Header';
import ThemeProvider from 'react-bootstrap/ThemeProvider';
import { Container, Row, Col } from 'react-bootstrap';


const SiteSitting = () => {
  return (
    <>
      <Header /> 
      <div className={classes['mt-4']}></div>
      <Container fluid variant='h-100'>
        <Row>
        <div className="row align-items-center">
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
          <div className="col">
            One of three columns
          </div>
        </div>
        </Row>
        <Row>
          <Col>2 of 5</Col>
        </Row>
        <Row>
          <Col>3 of 5</Col>
        </Row>
        <Row>
          <Col>4 of 5</Col>
        </Row>
        <Row>
          <Col>5 of 5</Col>
        </Row>
      </Container>
      </>
  )
}

export default SiteSitting
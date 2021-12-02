import React from 'react';
import './App.css';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import 'bootstrap/dist/css/bootstrap.min.css';

function Slider() {
  return (
    <div class='App'>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require('./images/slide1.jpg').default}
            alt='First slide'
            fluid
          />
          <Carousel.Caption>
            <h3>Welcome!</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={require('./images/slide2.jpg').default}
            alt='Second slide'
            fluid
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class='carousel-inner'
            className='d-block w-100'
            src={require('./images/slide3.jpg').default}
            alt='Third slide'
            fluid
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;

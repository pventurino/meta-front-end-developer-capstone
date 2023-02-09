import React from 'react';
import Container from './Container';
import Button from './Button';

import './Highlights.scss'
import photo from '../img/restauranfood.jpg';

const Highlights = props => (
  <Container>
    <div className='half'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        We are a family owned Mediterranean restaurant,
        focused on traditional recipes served with a modern twist.
      </p>
      <Button value='Reserve a Table'/>
    </div>
    <div className='half right'>
      <img src={photo} alt='Restaurant food'/>
    </div>
  </Container>
)

export default Highlights;
import React from 'react';
import Container from './Container';

import greek_salad from '../img/greek salad.jpg';
import bruchetta from '../img/bruchetta.png';
import lemon_dessert from '../img/lemon dessert.jpg';

import './Specials.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import Button from './Button';

const specials = [
  {
    photo: greek_salad,
    title: 'Greek Salad',
    price: 12.99,
    description: `
      The famous greek salad of crispy lettuce, peppers,
      olives and our Chicago style feta cheese, garnished
      with crunchy garlic and rosemary croutons.`
  },
  {
    photo: bruchetta,
    title: 'Bruchetta',
    price: 5.99,
    description: `
      Our Bruschetta is made from grilled bread that
      has been smeared with garlic and seasoned with
      salt and olive oil.`
  },
  {
    photo: lemon_dessert,
    title: 'Lemon Dessert',
    price: 5.00,
    description: `
      This comes straight from grandma's recipe book,
      every last ingredient has been sourced and is as
      authentic as can be imagined.`
  }
];

const SpecialCard = props => (
  <div className='card' key={props.title}>
    <img src={props.photo} alt={props.title}/>
    <div className='cardBottom'>
      <div className='content'>
        <h4 className='title'>{props.title}</h4>
        <h4 className='price'>$ {props.price.toFixed(2)}</h4>
        <p>{props.description}</p>
      </div>
      <span className='link'>Order delivery <FontAwesomeIcon icon={faMotorcycle} /></span>
    </div>
  </div>
);

const Specials = props => {

  let cards = specials.map((item, i) => (<SpecialCard {...item} key={i}/>))
  
  return (
    <Container key={"testimonies"}>
      <h2>This week's specials!</h2>
      <Button value='Online Menu'/>
      <div className='cards'>
        {cards}
      </div>
    </Container>
  )
}

export default Specials;
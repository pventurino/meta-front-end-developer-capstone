import React from 'react';
import Container from "./Container";

import logo from '../logo.svg';
import './Header.scss';

const Header = props => (
  <Container>
    <img src={logo} alt="Little Lemon logo"></img>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#orderonline">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  </Container>
)

export default Header;
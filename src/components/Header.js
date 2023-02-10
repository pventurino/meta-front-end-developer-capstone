import React from 'react';
import Container from "./Container";

import logo from '../logo.svg';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = props => (
  <Container>
    <img src={logo} alt="Little Lemon logo"></img>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><Link to="/reservations">Reservations</Link></li>
        <li><a href="#orderonline">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </nav>
  </Container>
)

export default Header;
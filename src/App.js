import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
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
        </header>
        <main>
          <section id="highlights"></section>
          <section id="testimonies"></section>
          <section id="about"></section>
        </main>
        <footer></footer>
      </>
    );
  }
}

export default App;

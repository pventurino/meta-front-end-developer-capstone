import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <>
        <header>
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
        </header>
        <main>
          <section id="highlights">
            <Container>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
            </Container>
          </section>
          <section id="specials">
            <Container>
              <h1>specials</h1>
            </Container>
          </section>
          <section id="testimonies">
            <Container>
              <h1>testimonies</h1>
            </Container>
          </section>
          <section id="about">
            <Container>
              <h1>about</h1>
            </Container>
          </section>
        </main>
        <footer>
          <Container>
            <h1>footer</h1>
          </Container>
        </footer>
      </>
    );
  }
}

export default App;

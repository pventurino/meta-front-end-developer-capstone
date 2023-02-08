import React, { Component } from 'react';
import './App.css';
import Container from './components/Container';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Header/>
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

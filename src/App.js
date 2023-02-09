import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Highlights from './components/Highlighs';
import Specials from './components/Specials';
import Testimonies from './components/Testimonies';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Header/>
        </header>
        <main>
          <section id="highlights">
            <Highlights/>
          </section>
          <section id="specials">
            <Specials/>
          </section>
          <section id="testimonies">
            <Testimonies/>
          </section>
          <section id="about">
            <About/>
          </section>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
    );
  }
}

export default App;

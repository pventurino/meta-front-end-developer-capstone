import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Reservations from './components/Reservations';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ConfirmationPage from './components/ConfirmationPage';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <header>
          <Header/>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/reservations/confirmation" element={<ConfirmationPage/>} />
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import About from './About';
import Highlights from './Highlighs';
import Specials from './Specials';
import Testimonies from './Testimonies';

const HomePage = () => (
  <>
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
  </>
);

export default HomePage;
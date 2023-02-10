import Container from './Container';
import './About.scss';
import photo1 from '../img/Mario and Adrian A.jpg';
import photo2 from '../img/Mario and Adrian B.jpg';

const About = props => (
  <Container>
    <div className='text'>
      <h1>Little Lemon</h1>
      <h2>Chicago</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit
        esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <div className='images'>
      <img className='photo1' src={photo1} alt='Mario and Adrian'/>
      <img className='photo2' src={photo2} alt='Mario and Adrian again'/>
    </div>
  </Container>
)

export default About;
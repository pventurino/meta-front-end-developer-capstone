import Container from './Container';
import './Footer.scss'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = props => (
  <Container>
    <div>
      <h4>Doormat navigation</h4>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#reservations">Reservations</a></li>
        <li><a href="#orderonline">Order Online</a></li>
        <li><a href="#login">Login</a></li>
      </ul>
    </div>
    <div>
      <h4>Contact</h4>
      <ul>
        <li><a href="#address">Address</a></li>
        <li><a href="tel:555-555-5555">555-555-5555</a></li>
        <li><a href="mailto:littlelemon@example.org">littlelemon@example.org</a></li>
      </ul>
    </div>
    <div>
      <h4>Social Media Links</h4>
      <ul>
        <li><a href="#facebook"><FontAwesomeIcon icon={faFacebook}/> littlelemonrestaurant</a></li>
        <li><a href="#instagram"><FontAwesomeIcon icon={faInstagram}/> littlelemonrestaurant</a></li>
      </ul>
    </div>
  </Container>
)

export default Footer;
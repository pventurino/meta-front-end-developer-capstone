import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from './Container';
import './Testimonies.scss'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const reviews = [
  {
    photo: 'user1',
    name: 'Alan',
    rating: 4,
    text: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    photo: 'user2',
    name: 'Brenda',
    rating: 5,
    text: `
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    photo: 'user3',
    name: 'Claire',
    rating: 4,
    text: `
      Duis aute irure dolor in reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur.`
  },
  {
    photo: 'user4',
    name: 'Dan',
    rating: 3,
    text: `
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
  }
];

const ReviewCard = props => (
  <div className='card'>
    <div className='header'>
      <img src={require(`../img/users/${props.photo}.jpg`)} alt={props.name} />
      <div>
        <div className='stars'>
          { [...Array(props.rating)].map((_,i) => 
            <FontAwesomeIcon
              key={i}
              icon={faStar}
              color="var(--primary2)"/>) }
        </div>
        <h4>{props.name}</h4>
      </div>
    </div>
    <div className='body'>
      <p>{props.text}</p>
    </div>
  </div>
)

const Testimonies = props => {

  let cards = reviews.map((review, i) => (
    <ReviewCard
      {...review}
      key={i}
      />
  )); 
  
  return(
    <Container>
      <h2>Testimonies</h2>
      <div className='cards'>
        {cards}
      </div>
    </Container>
  );
}

export default Testimonies;
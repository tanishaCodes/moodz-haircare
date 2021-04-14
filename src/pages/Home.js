import Container from 'react-bootstrap/Container'

import Jumbotron from '../components/jumbotron'
import Cards from '../components/cards'
import MiddleCard from '../components/middleCard'

import '../index.css'

const Home = () => {
    // Code for the Button will go here

    return (
        <div>
          <div>
            <Jumbotron />
          </div>
          <div>
            <Container>
                <Cards />
            </Container>
          </div>
          <div>
              <MiddleCard />
          </div>
        </div>
    );
}

export default Home

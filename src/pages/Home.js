import Container from 'react-bootstrap/Container'

import Jumbotron from '../components/jumbotron'
import Cards from '../components/cards'
import MiddleCard from '../components/middleCard'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
    return (
        <div>
          <div className='jumbotron__container'>
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

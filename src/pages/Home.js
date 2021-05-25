import Container from 'react-bootstrap/Container'

import Jumbotron from '../components/Main/jumbotron'
import Cards from '../components/Main/cards'
import MiddleCard from '../components/Main/middleCard'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {
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

import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

import Cards from '../components/cards'

import '../index.css'

const Home = () => {
    // Code for the Button will go here

    return (
        <div>
          <div>
            <Jumbotron className='jumbotron'>
                <h2>
                    Unique Hair Calls for Unique Care
                </h2>
                <p>
                    Custom hair care formulated just for you!
                </p>
                <p>
                    <Button className='jumbotron__btn' variant='dark'>
                        Get Your Formula
                    </Button>
                </p>
            </Jumbotron>
          </div>
          <div>
            <Container>
                <Cards />
            </Container>
          </div>
        </div>
    );
}

export default Home

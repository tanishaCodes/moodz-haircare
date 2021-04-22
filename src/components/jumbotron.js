import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';

import Conditioners from '../assets/images/conditioners.jpg'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const jumbotron = () => {
    return (
        <div>
          <Container className='jumbotron__container'>
          <Jumbotron className='jumbotron' style={{ 
            backgroundImage: `url(${Conditioners})`,
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height: '50vh',
            }}>
            <Row>
             <Col>
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
             </Col>
            </Row>
            </Jumbotron>
          </Container>
        </div>
    )
}

export default jumbotron

import { Container, Row, Col, Image } from 'react-bootstrap'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MoodzFounder from '../assets/images/moodzFounder.png'


const About = () => {
    return (
        <div>
         <div className='container'>
          <Container>
            <h2>
             <span>
                About Us
             </span>
            </h2>
          </Container>
          <Container>
              <Row>
                <Col className='about'>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.  
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.   
                  </p>
                </Col>
                <Col>
                  <Image className='about__founder' src={MoodzFounder} alt='photo of Moodz Founder' rounded />
                </Col>
              </Row>
          </Container>   
         </div>
        </div>
    )
}

export default About

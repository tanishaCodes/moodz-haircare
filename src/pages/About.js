import { Container, Row, Col, Image } from 'react-bootstrap'
import AboutInfo from '../components/About/aboutInfo'

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
                  <AboutInfo />
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

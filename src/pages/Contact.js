import { Container, Row, Col } from 'react-bootstrap'
import ContactForm from '../components/contactForm'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Contact = () => {
    return (
        <div>
          <div>
           <Container className='container'>
              <h2>
                <span>
                  Contact Us
                </span>
              </h2> 
           </Container>
           <Container>
               <Row>
                 <Col>
                    <ContactForm />
                 </Col>
               </Row>
           </Container>
          </div>
        </div>
    )
}

export default Contact

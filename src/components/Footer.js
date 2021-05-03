import { Container, Row, Col } from 'react-bootstrap'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const Footer = () => {
    return (
        <div className='footer' sticky='bottom'>
            <Container>
                <Row>
                    <Col>
                      <div className='footer__header'>
                        <strong>
                          About Us
                        </strong>
                      </div>
                      <div>
                        This is a summary about us and our awesome products.
                      </div>
                    </Col>
                    <Col>
                     <div className='footer__header'>
                        <strong>
                          Navigation
                        </strong>
                     </div>
                     <div className='footer__link'>
                       <a href='/' rel='noopener noreferrer' role='button'>Home</a>
                     </div>
                     <div className='footer__link'>
                       <a href='/about' rel='noopener noreferrer' role='button'>About</a>
                     </div>
                     <div className='footer__link'>
                       <a href='/shop' rel='noopener noreferrer' role='button'>Shop</a>
                     </div>
                     <div className='footer__link'>
                       <a href='/contact' rel='noopener noreferrer' role='button'>Contact</a>
                     </div>
                    </Col>
                    <Col>
                     <div className='footer__header'>
                        <strong>
                          Social
                        </strong>
                     </div>
                     <div className='row'> 
                     <div className='column'>
                        <FacebookIcon />
                     </div>
                     <div className='column'>
                        <InstagramIcon />
                     </div>
                     <div className='column'>
                        <TwitterIcon />
                     </div>
                     </div>
                   </Col>
                </Row>
                <br></br>
                <br></br>
                <Row>
                    <Col className='text-center'>
                      Copyright 2021 | Tanisha Howell
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer

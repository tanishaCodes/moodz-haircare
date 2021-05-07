import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'

import MoodzLogo from '../assets/images/moodzLogo.png'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const navbar = () => {
  return (
        <Router>
          <Container className='text-center' fluid>
            <Navbar.Brand href='/'>
              <img className='navbar__logo' src={MoodzLogo} alt='logo' />
            </Navbar.Brand>
          </Container>
          <Container className='text-center'>
            <Row>
              <Navbar className='navbar__menu' variant='light' sticky='top' expand="lg">
              <Navbar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse className='responsive-navbar-nav'>
                  <div>
                <Nav as='ul'>
                 <Col sm={10}>
                  <Nav.Item as='li'>
                    <Nav.Link href='/'>
                      Home
                    </Nav.Link>
                  </Nav.Item>
                 </Col>
                 <Col xs={8}>
                  <Nav.Item as='li'>
                    <Nav.Link href='/about'>
                      About
                    </Nav.Link>
                  </Nav.Item>
                 </Col>
                 <Col xs={8}>
                  <Nav.Item as='li'>
                    <Nav.Link href='/shop'>
                      Shop
                    </Nav.Link>
                  </Nav.Item>
                 </Col>
                 <Col xs={10}>
                  <Nav.Item as='li'>
                    <Nav.Link href='/contact'>
                      Contact
                    </Nav.Link>
                  </Nav.Item>
                 </Col>
               </Nav>
               </div>
               </Navbar.Collapse>
             </Navbar>
            </Row>
           </Container>
        </Router>
  )
}

export default navbar

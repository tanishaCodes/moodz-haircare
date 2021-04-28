import React from 'react'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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
               </Navbar.Collapse>
             </Navbar>
            </Row>
           </Container>
        </Router>
  )
}

export default navbar

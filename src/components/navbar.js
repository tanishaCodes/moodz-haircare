import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import Home from '../pages/Home';
import About from '../pages/About';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';

import MoodzLogo from '../assets/images/moodzLogo.png'

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const navbar = () => {
  return (
        <Router>
          <Container className='navbar justify-items-center' fluid>
             <Navbar className='navbar__menu' variant='light' sticky='top' expand="lg">
              <Navbar.Brand className='.d-none col align-items-center' href='/'>
                <img className='navbar__logo' src={MoodzLogo} alt='logo' width={175} height={175} />
              </Navbar.Brand>
              <Navbar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='ml-auto font-weight-bolder' as='ul'>
                  <Nav.Item as='li'>
                    <Nav.Link href='/'>Home</Nav.Link>
                 </Nav.Item>
                 <Nav.Item as='li'>
                    <Nav.Link href='/about'>About</Nav.Link>
                 </Nav.Item>
                 <Nav.Item as='li'>
                    <Nav.Link href='/portfolio'>Shop</Nav.Link>
                 </Nav.Item>
                 <Nav.Item as='li'>
                    <Nav.Link href='/contact'>Contact</Nav.Link>
                 </Nav.Item>
               </Nav>
               </Navbar.Collapse>
             </Navbar>

             <Switch>
               <Route path='/' exact render={() => <Home />} />
               <Route path='/about' exact render={() => <About />} />
               <Route path='/shop' exact render={() => <Shop />} />
               <Route path='/contact' exact render={() => <Contact />} />
             </Switch> 
           </Container>
        </Router>
  )
}

export default navbar

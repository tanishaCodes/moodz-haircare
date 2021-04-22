import React from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavMenu from 'react-bootstrap/Navbar';

import MoodzLogo from '../assets/images/moodzLogo.png';

import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const navbar = () => {
    return (
        <>
         <Nav className='row'>
            <Container className='navbar justify-items-center' fluid={true}>
             <Navbar className='navbar__menu' variant='light' sticky='top' expand="lg">
              <Navbar.Toggle className='border-0' aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse>
                  <NavMenu className='navbar__item'>
                    <Nav.Item className='col-3 align-items-center'>
                      <Nav.Link to='/'>
                        Home
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='col-3 align-items-center'>
                      <Nav.Link to='/about'>
                       About
                      </Nav.Link>
                    </Nav.Item>
                      <Navbar.Brand className='.d-none col align-items-center' href='/'>
                        <img className='navbar__logo' src={MoodzLogo} alt='logo' width={175} height={175} />
                      </Navbar.Brand>
                    <Nav.Item className='col-3 align-items-center'>
                      <Nav.Link to='/shop'>
                       Shop
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='col-3 align-items-center'>
                      <Nav.Link to='/contact'>
                       Contact
                      </Nav.Link>
                    </Nav.Item>
                  </NavMenu>
                </Navbar.Collapse>
             </Navbar>
           </Container>
         </Nav>
        </>
    )
}

export default navbar

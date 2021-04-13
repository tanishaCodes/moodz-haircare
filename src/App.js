import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Header from './components/Header';
import MoodzLogo from './assets/images/moodzLogo.png'
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <Container className='justify-content-center' fluid={true}>
          <Navbar expand="lg" variant="light" bg="light" sticky='top'>
            <Navbar.Brand href="/">
              <img className='logo' src={MoodzLogo} alt='logo' width={175} height={125} />
            </Navbar.Brand>
          </Navbar>
          <Navbar bg='light' variant='light' sticky='top'>
            <Nav className="mr-auto">
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/blog'>Blog</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
            </Nav>
          </Navbar>
        <Switch>
          <Route path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Container>
    </Router>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

export default App;

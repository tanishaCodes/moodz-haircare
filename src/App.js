import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Navbar from './components/navbar';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Footer from './components/footer';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
       <Navbar />
       <Switch>
               <Route path='/' exact render={() => <Home />} />
               <Route path='/about' exact render={() => <About />} />
               <Route path='/shop' exact render={() => <Shop />} />
               <Route path='/contact' exact render={() => <Contact />} />
             </Switch> 
      </Router>
      <Container>
        <Footer />
      </Container>
    </>
  );
}


export default App;

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
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
      <Container>
        <Footer />
      </Container>
    </>
  );
}


export default App;

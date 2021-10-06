import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Home from './pages/Home';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <ScrollToTop />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/projects" />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

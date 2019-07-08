import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainNav from './components/mainNav';
import HomePage from './components/homePage';
import About from './components/aboutPage';
import Contact from './components/contactPage';
import Topics from './components/topicsPage';

import './App.css';

const routesArray = [
  {linkRoute: "/", linkName:"Home Page"},
  {linkRoute: "/about", linkName:"About Page"},
  {linkRoute:"/contact", linkName:"Contact Page"},
  {linkRoute: "/topics", linkName:"Topics Page"}
]

function App() {
  return (
    <Router>
      <div className="App">
        <MainNav routes={routesArray} />
        <Route path="/" exact render={routeProps => <HomePage name="Misha" {...routeProps} /> } />
        <Route path="/about" exact component={About}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/topics" component={Topics}></Route>
      </div>
    </Router>
    
  );
};

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


import Home from './pages/Home.jsx';
import Hotel from './pages/Hotel.jsx';
import Restaurant from './pages/Restaurant.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Home}/>
          <Route path="/Hotel" component={Hotel}/>
          <Route path="/Restaurant"component={Restaurant}/>


        </div>
      </Router>
    );
  }
}

export default App;

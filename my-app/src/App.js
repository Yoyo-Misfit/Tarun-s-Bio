import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './components/homepage/homepage';
import Aboutpage from './components/about/about';
import Projectspage from './components/projects/projects';
import Qacpage from './components/qac/qac';
import NavBar from './components/navbar/navbar'

function App() {
  return (
    <div className="App-header">
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={Aboutpage} />
        <Route path='/projects' component={Projectspage} />
        <Route path='/qac' component={Qacpage} />
      </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import './App.css';
import Icon from './assets/Logo.png'
import HomePage from './components/homepage/homepage';
import Aboutpage from './components/about/about';
import Projectspage from './components/projects/projects';
import Qacpage from './components/qac/qac';
import NavBar from './components/navbar/navbar'

function App() {

  const history = useHistory();
  return (
    <div className="App-header">
      <div className="navbar">
        <div className="grow">
          <button className="logo" onClick={() => history.push('/')}><img src={Icon} alt="Icon" /></button>
        </div>
        <NavBar />
      </div>
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

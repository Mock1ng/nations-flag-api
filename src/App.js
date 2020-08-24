import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FlagMain from './components/FlagsMain';
import DetailFlag from './components/DetailFlag';
import { ResponseProvider } from './components/context/ResponseContext';
import './App.scss';

function App() {
  return (
    <ResponseProvider>
      <nav>
        <h2><a href="/" className='title'>Where in the world?</a></h2>
        <button className='theme-switcher'><i className="far fa-moon"></i>  Dark Mode</button>
      </nav>
      <div className="container">
        <Router>
          <Switch>
            <Route path='/' exact component={FlagMain} />
            <Route path='/detail/:nationFlag' component={DetailFlag} />
          </Switch>
        </Router>
      </div>
    </ResponseProvider>
  );
}

export default App;

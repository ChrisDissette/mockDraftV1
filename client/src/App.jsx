import {useState} from 'react';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/' />
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {App} from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import registerServiceWorker from './registerServiceWorker';

render(
    <Router>
      <Route path="*" component={App}/>
    </Router>, document.getElementById('root'));
registerServiceWorker();

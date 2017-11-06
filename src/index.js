import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';
import reducer from './reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import './app.css';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

render(
    <Provider store={store}>
      <Router>
        <Route path="*" component={App}/>
      </Router>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();

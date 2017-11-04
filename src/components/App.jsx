import * as React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Home} from "./Home";
import {Team} from "./Team";

export class App extends React.Component {
  render() {

    return (
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">StfuAndClick.com</h1>
          </header>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/:team" component={Team}/>
            </Switch>
          </div>
        </div>
    );

  }
}

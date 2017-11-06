import * as React from 'react';
import {connect} from 'react-redux';
import {withRouter, Route, Switch} from 'react-router-dom';
import {Home} from "./Home";
import Team from "./Team";
import {setNewSession} from "../actions/index";

class AppComponent extends React.Component {
  componentWillMount() {
    this.props.setNewSession();
  }

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
          <footer className="app-footer container-fluid text-center">If you don't like this page, it's&nbsp;
            <a href="https://applifting.cz/" target="_blank" rel="noopener noreferrer">Applifting</a>'s fault
          </footer>
        </div>
    );

  }
}

const mapDispatchToProps = dispatch => {
  return {
    setNewSession: () => {
      dispatch(setNewSession())
    }
  };
};

const App = withRouter(connect(
    null,
    mapDispatchToProps,
)(AppComponent));

export default App;

import React, {Component} from 'react';
import ClickButton from './components/click/ClickButton';
import ClickInput from './components/click/ClickInput';
import ScoreBoardList from './components/scoreboard/ScoreBoardList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">StfuAndClick.com</h1>
          </header>
          <p className="App-intro">
            <ClickInput type={"text"} placeholder={"Your mom"}/>
            <ClickButton label={"Click!"}/>
          </p>
          <div className="container">
            <div className="scoreboard">
              <ScoreBoardList start={0} count={10}/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

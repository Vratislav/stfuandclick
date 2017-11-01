import React, {Component} from 'react';
import ClickButton from './components/click/ClickButton';
import ClickInput from './components/click/ClickInput';
import ScoreBoardList from './components/scoreboard/ScoreBoardList';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">StfuAndClick.com</h1>
          </header>
          <p className="App-intro">
            <ClickInput type={"text"} placeholder={"Your mom"}/>
            <ClickButton label={"Click!"}/>
          </p>
          <div className="container">
            <div className="scoreboard">
              <ScoreBoardList/>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

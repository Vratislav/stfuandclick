import React, {Component} from 'react';
import ClickButton from './components/click/ClickButton';
import ClickInput from './components/click/ClickInput';
import ScoreBoardTable from "./components/scoreboard/ScoreBoardTable";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() {
    return (
        <div className="app">
          <header className="app-header">
            <h1 className="app-title">StfuAndClick.com</h1>
          </header>
          <div className="container">
            <div className="app-holder">
              <div className="app-holder-content">
                <div className="row">
                  <ClickInput type={"text"} placeholder={"Your mom"}/>
                  <ClickButton label={"Click!"}/>
                </div>
              </div>
              <div className="scoreboard">
                <div className="scoreboard-heading">
                  <div className="ribbon">
                    <strong className="ribbon-content"><h2>TOP 10 Clickers</h2></strong>
                  </div>
                </div>
                <ScoreBoardTable start={0} count={10}/>
              </div>
              <div className="app-claim">
                Want to be top? STFU and click!
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;

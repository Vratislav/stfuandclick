import React, {Component} from 'react';
import ClickButton from './components/click/ClickButton';
import ClickInput from './components/click/ClickInput';
import ScoreBoardList from './components/scoreboard/ScoreBoardList';
import './App.css';

class App extends Component {
  scoreBoard = {};

  constructor() {
    super();

    let headers = new Headers(),
        init = {
          method: 'GET',
          headers: headers,
          cache: 'default'
        },
        allScoresUrl = 'https://klikuj.herokuapp.com/api/v1/leaderboard';

    fetch(allScoresUrl, init).then(res => {
      return res.json();
    }).then(jsonResponse => {
      this.scoreBoard = jsonResponse;
    }).catch(err => {
      console.error(err);
    });

    this.scoreBoard = [
      {
        "order": 1,
        "team": "Prokop",
        "clicks": 22056
      },
      {
        "order": 2,
        "team": "VIRTII.COM",
        "clicks": 3975
      }
    ];
  }

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
              <ScoreBoardList scoreBoard={this.scoreBoard} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;

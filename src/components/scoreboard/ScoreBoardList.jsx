import * as React from 'react';
import ScoreBoardItem from './ScoreBoardItem'

export default class ScoreBoardList extends React.Component {

  scoreBoardItems = [];

  constructor() {
    super();

    this.state = {scoreBoard: []};
    this.getScoreBoard();
  }

  getScoreBoard() {
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
      this.setState({scoreBoard: jsonResponse});
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    this.state.scoreBoard.forEach((item, index) => {
      this.scoreBoardItems.push(<ScoreBoardItem key={index} order={item.order} value={item.team}
                                                clicks={item.clicks}/>);
    });

    return (
        <ul>
          {this.scoreBoardItems}
        </ul>
    );
  }

}
import * as React from 'react';
import ScoreBoardRow from "./ScoreBoardRow";
import PropTypes from 'prop-types';

export default class ScoreBoardTable extends React.Component {

  constructor() {
    super();

    this.state = {
      scoreBoard: []
    };
  }

  componentWillMount() {
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

      let scoreBoard = jsonResponse.slice(this.props.start, this.props.count).map((score, index) => {
        return (
            <ScoreBoardRow key={index} order={score.order} team={score.team} clicks={score.clicks}/>
        );
      });
      this.setState({scoreBoard: scoreBoard});

    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
        <table className="table">
          <thead>
          <tr>
            <th> </th>
            <th className="text-uppercase">Team</th>
            <th className="text-right text-uppercase">Clicks</th>
          </tr>
          </thead>
          <tbody>
            {this.state.scoreBoard}
          </tbody>
        </table>
    );
  }

}

ScoreBoardTable.propTypes = {
  start: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

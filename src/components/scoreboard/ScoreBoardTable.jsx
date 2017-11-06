import * as React from 'react';
import ScoreBoardRow from "./ScoreBoardRow";
import PropTypes from 'prop-types';
import {api} from "../../constants/index";

export default class ScoreBoardTable extends React.Component {

  constructor() {
    super();

    this.state = {
      scoreBoard: []
    };

    this.getScoreBoard();
  }

  getScoreBoard() {
    let headers = new Headers(),
        init = {
          method: 'GET',
          headers: headers,
          cache: 'default'
        },
        allScoresUrl = api.scoreboard;

    fetch(allScoresUrl, init).then(res => {

      return res.json();

    }).then(jsonResponse => {

      let start = this.props.start;

      if (this.props.team) {
        let teamPosition;
        jsonResponse.forEach((score, index) => {
          if (score.team === this.props.team) {
            teamPosition = index;
          }
        });

        if (typeof teamPosition !== 'undefined') {
          if (teamPosition - Math.floor(this.props.count / 2) < 0) {
            start = 0;
          } else if (teamPosition + Math.ceil(this.props.count / 2) > jsonResponse.length) {
            start = jsonResponse.length - this.props.count;
          } else {
            start = teamPosition - Math.floor(this.props.count / 2);
          }
        }
      }

      let scoreBoard = jsonResponse.slice(start, start + this.props.count).map((score, index) => {
        return (
            <ScoreBoardRow
                key={index}
                order={score.order}
                team={score.team}
                clicks={score.clicks}
                className={score.team === this.props.team ? 'active' : ''}
            />
        );
      });
      this.setState({scoreBoard: scoreBoard});

    }).catch(err => {
      console.error(err);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.reload !== nextProps.reload || typeof this.props.reload === 'undefined') {
      this.getScoreBoard();
    }
  }

  render() {
    return (
        <table className="table" reload={this.props.reload}>
          <thead>
          <tr>
            <th></th>
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
  count: PropTypes.number.isRequired,
};

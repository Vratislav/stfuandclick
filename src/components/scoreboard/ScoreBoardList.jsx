import * as React from 'react';
import ScoreBoardItem from './ScoreBoardItem'
import PropTypes from 'prop-types';

export default class ScoreBoardList extends React.Component {

  constructor() {
    super();

    this.state = {
      scoreBoard: []
    };
  }

  componentWillMount() {
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
            <ScoreBoardItem key={index} order={score.order} value={score.team} clicks={score.clicks}/>
        );
      });

      this.setState({scoreBoard: scoreBoard});
    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
        <ul>
          {this.state.scoreBoard}
        </ul>
    );
  }

}

ScoreBoardList.propTypes = {
  start: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
};

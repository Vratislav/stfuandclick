import * as React from 'react';
import ScoreBoardItem from './ScoreBoardItem'

export default class ScoreBoardList extends React.Component {

  render() {
    let scoreBoardItems = [];

    this.props.scoreBoard.forEach((item, index) => {
      scoreBoardItems.push(<ScoreBoardItem key={index} order={item.order} value={item.team} clicks={item.clicks}/>);
    });

    return (
        <ul>
          {scoreBoardItems}
        </ul>
    );
  }

}
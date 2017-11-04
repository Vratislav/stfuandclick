import * as React from 'react';
import PropTypes from 'prop-types';

export default class ScoreBoardRow extends React.Component {

  render() {
    return (
        <tr>
          <td className="text-right">{this.props.order}</td>
          <td>{this.props.team}</td>
          <td className="text-right">{this.props.clicks}</td>
        </tr>
    );
  }

}

ScoreBoardRow.propTypes = {
  team: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  clicks: PropTypes.number.isRequired
};

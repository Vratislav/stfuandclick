import * as React from 'react';
import PropTypes from 'prop-types';
import {formatNumber} from "../../helpers/numbers";

export default class ScoreBoardRow extends React.Component {

  render() {
    return (
        <tr>
          <td className="text-right">{this.props.order}</td>
          <td>{this.props.team}</td>
          <td className="text-right">{formatNumber(this.props.clicks)}</td>
        </tr>
    );
  }

}

ScoreBoardRow.propTypes = {
  team: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  clicks: PropTypes.number.isRequired
};

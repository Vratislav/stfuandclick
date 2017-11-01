import * as React from 'react';
import PropTypes from 'prop-types';

export default class ScoreBoardItem extends React.Component {

  render() {
    return (
        <li>{this.props.order}: {this.props.value} - {this.props.clicks}</li>
    );
  }

}

ScoreBoardItem.propTypes = {
  value: PropTypes.string.isRequired,
  order: PropTypes.number.isRequired,
  clicks: PropTypes.number.isRequired
};

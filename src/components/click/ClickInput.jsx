import * as React from 'react';

export default class ClickInput extends React.Component {

  render() {
    return (
        <span>
          <label>Enter your team name:</label>
          <input type={this.props.type} placeholder={this.props.placeholder} />
        </span>
    );
  }

}
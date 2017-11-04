import * as React from 'react';

export default class ClickInput extends React.Component {

  render() {
    return (
        <div className="col-sm-7">
          <label>Enter your team name:</label>
          <input type={this.props.type} placeholder={this.props.placeholder} className="form-control"/>
        </div>
    );
  }

}
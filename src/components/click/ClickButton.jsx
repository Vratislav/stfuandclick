import * as React from 'react';

export default class ClickButton extends React.Component {

  handleClick() {
    console.log('click');
  }

  render() {
    return (
        <div className="col-sm-5">
          <button className="btn btn-primary btn-block"
              onClick={this.handleClick}
          >
            {this.props.label}
          </button>
        </div>
    );
  }

}
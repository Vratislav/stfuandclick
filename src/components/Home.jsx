import * as React from 'react';
import {Link} from 'react-router-dom';
import ScoreBoardTable from "./scoreboard/ScoreBoardTable";
import BottomClaim from './layout/BottomClaim';

export class Home extends React.Component {
  constructor() {
    super();
    this.state = {teamNameValue: ''};
  }

  handleChange(event) {
    this.setState({teamNameValue: event.target.value});
  }

  render() {

    return (
        <div>
          <div className="text-center">
            <div className="app-claim app-claim-top">
              "It's really simple, you just need to click as fast as you can."<br/>
              <div>- anonymous</div>
            </div>
          </div>
          <div className="app-holder">
            <div className="app-holder-content app-holder-content-b-margin">
              <div className="row">
                <div className="col-sm-7">
                  <label>Enter your team name:</label>
                  <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}
                         placeholder={"Your mom"} className="form-control"/>
                </div>
                <div className="col-sm-5">
                  <Link to={`/${this.state.teamNameValue}`} className="btn btn-primary btn-block">Click!</Link>
                </div>
              </div>
            </div>
            <div className="scoreboard">
              <div className="scoreboard-heading">
                <div className="ribbon">
                  <strong className="ribbon-content"><h2>TOP 10 Clickers</h2></strong>
                </div>
              </div>
              <ScoreBoardTable start={0} count={10} reload={"false"}/>
            </div>
            <BottomClaim/>
          </div>
        </div>
    );

  }
}

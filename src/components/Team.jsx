import * as React from 'react';
import { ClickCounter } from "./click/ClickCounter";

export class Team extends React.Component {
  teamName;
  session;

  constructor({match}) {
    super(...match);
    this.teamName = match.params.team;
    this.session = Date.now();
    this.state = {clicks: {}}
  }

  componentWillMount() {
    this.handleClick();
  }

  handleClick() {
    let headers = new Headers({'Content-Type': 'application/json'}),
        init = {
          method: 'POST',
          headers: headers,
          cache: 'default',
          body: JSON.stringify({
            "team": this.teamName,
            "session": this.session
          })
        },
        klikUrl = 'https://klikuj.herokuapp.com/api/v1/klik';

    fetch(klikUrl, init).then(res => {

      return res.json();

    }).then(jsonResponse => {

      this.setState({
        clicks: jsonResponse
      })

    }).catch(err => {
      console.error(err);
    });
  }

  render() {
    return (
        <div>
          <div className="text-center">
            <div className="app-claim app-claim-top ">
              <h2>Clicking for team <b>{this.teamName}</b></h2>
              <span className="affiliate form-inline center-block text-center">
                Too lazy to click? Let your pals click for you
                <input type="text" defaultValue={window.location.href} className="form-control"/>
              </span>
            </div>
          </div>

          <div className="app-holder">
            <div className="app-holder-content">
              <button className="btn btn-primary btn-block" onClick={this.handleClick.bind(this)}>
                Click!
              </button>
              <ClickCounter yourClicks={this.state.clicks.your_clicks} teamClicks={this.state.clicks.team_clicks}/>
            </div>
          </div>
        </div>
    );
  }
}

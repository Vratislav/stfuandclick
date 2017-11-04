import * as React from 'react';
import ClickButton from "./click/ClickButton";
import ClickCounter from "./click/ClickCounter";

export class Team extends React.Component {
  teamName;

  constructor({match}) {
    super(...match);
    this.teamName = match.params.team;
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
              <ClickButton label={"Click!"}/>
              <ClickCounter/>
            </div>
          </div>
        </div>
    );
  }
}

import * as React from 'react';

export class Team extends React.Component {
  teamName;

  constructor({match}) {
    super(...match);
    this.teamName = match.params.team;
  }

  render() {
    return (
        <div>
          {this.teamName}
        </div>
    );
  }
}

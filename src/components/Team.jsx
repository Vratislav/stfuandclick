import * as React from 'react';
import {ClickCounter} from "./click/ClickCounter";
import ScoreBoardTable from "./scoreboard/ScoreBoardTable";
import BottomClaim from "./layout/BottomClaim";
import {api} from "../constants/index";
import {connect} from 'react-redux';
import {clicks} from "../actions/index";

export class TeamComponent extends React.Component {
  // -- promenne primo v react componente. Pokud se zmeni props, tak mas smolika a teamName by se neaktulizoval, ne?
  teamName;
  reload;

  constructor({match}) {
    // + za demonstraci dekonstrukce
    super(...match);
    this.teamName = match.params.team;
    // - state by se mel drzet v redux store!
    this.state = {clicks: {}, session: Date.now()};
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
            "session": this.props.store.session
          })
        },
        klikUrl = api.click;

    fetch(klikUrl, init).then(res => {

      return res.json();

    }).then(jsonResponse => {

      this.props.clicks(jsonResponse);
      this.reload = Date.now();

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
              <ClickCounter yourClicks={this.props.store.clicks.your_clicks} teamClicks={this.props.store.clicks.team_clicks}/>
            </div>
            <div className="scoreboard">
              <ScoreBoardTable count={7} team={this.teamName} reload={this.reload}/>
            </div>
            <BottomClaim/>
          </div>
        </div>
    );
  }
}

// - Tak trosku se vytratili konteinery a state ve store, vlastne ho tam moc neni. Vsechno se taha a resi v ramci komponent az na pocet kliku, ktery se taha prez store.

const mapStateToProps = state => {
  return { store: state };
};

const mapDispatchToProps = dispatch => {
  return {
    clicks: count => {
      dispatch(clicks(count))
    }
  };
};

const Team = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamComponent);

export default Team;

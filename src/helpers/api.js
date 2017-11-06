import {api} from "../constants/index";

export const getScoreboard = state => {
  console.log(state);
  let headers = new Headers(),
      init = {
        method: 'GET',
        headers: headers,
        cache: 'default'
      },
      allScoresUrl = api.scoreboard;

  fetch(allScoresUrl, init).then(res => {

    return res.json();

  }).then(jsonResponse => {

    state.setState(state.scoreboard = jsonResponse.slice(0).map((score, index) => {
      return (
          {key: index, ...score}
      );
    }));
    // this.setState({scoreBoard: scoreBoard});

  }).catch(err => {
    console.error(err);
  });
};

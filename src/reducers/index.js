import * as constants from '../constants';
import {combineReducers} from 'redux';

const session = (state = '', action) => {
  switch (action.type) {
    case constants.NEW_SESSION:
      return Date.now();
    default:
      return state;
  }
};

const clicks = (state = 0, action) => {
  switch (action.type) {
    case constants.CLICK:
      return action.count;
    default:
      return state;
  }
};

export default combineReducers({
  session,
  clicks
});

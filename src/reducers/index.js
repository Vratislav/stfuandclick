import {NEW_SESSION} from '../constants';

export const session = (state, action) => {
  switch (action.type) {
    case NEW_SESSION:
      return Date.now();
    default:
      return state;
  }
};

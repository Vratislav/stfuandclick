import * as constants from '../constants';

export const setNewSession = () => {
  return { type: constants.NEW_SESSION };
};

export const clicks = count => {
  return { type: constants.CLICK, count: count };
};

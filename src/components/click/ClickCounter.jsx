import React from 'react';
import {formatNumber} from "../../helpers/numbers";

export const ClickCounter = props => {
  return (
      <div className="counter row">
        <div className="col-sm-6">
          <em>Your clicks:</em>
          <b>{formatNumber(props.yourClicks)}</b>
        </div>
        <div className="col-sm-6">
          <em>Teams clicks:</em>
          <b>{formatNumber(props.teamClicks)}</b>
        </div>
      </div>
  );
};

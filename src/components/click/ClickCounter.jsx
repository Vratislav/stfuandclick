import * as React from 'react';
import {formatNumber} from "../../helpers/numbers";

export default class ClickCounter extends React.Component {
  render() {

    return (
       <div className="counter row">
         <div className="col-sm-6">
           <em>Your clicks:</em>
           <b>{formatNumber(1230)}</b>
         </div>
         <div className="col-sm-6">
           <em>Teams clicks:</em>
           <b>{formatNumber(3501)}</b>
         </div>
       </div>
    );

  }
}
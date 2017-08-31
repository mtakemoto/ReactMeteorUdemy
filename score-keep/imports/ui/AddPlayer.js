import React from 'react';
import {Players} from './../api/players';

export default class AddPlayer extends React.Component {

  /* handleSubmit
   * By default, submit does full-page refresh.  Need onSubmit listener
   * Target is the form
   */
  handleSubmit(e) {
    let playerName = e.target.playerName.value;
    e.preventDefault();
    if(playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  }

  /* Notes
   * Need to bind this to access props in custom functions
   */
  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    )
  }
}

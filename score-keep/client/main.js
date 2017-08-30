import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';

/* Notes
 * JSX should only return 1 root element
 */

const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => Players.remove({_id: player._id})}>X</button>
      </p>
    );
  });
};

const insertPlayer = function(playerName) {
  Players.insert({
    name: playerName,
    score: 0
  });
}

//By default, submit does full-page refresh.  Need onSubmit listener
//Target is the form
const handleSubmit = function(e) {
  let playerName = e.target.playerName.value;
  e.preventDefault();
  if(playerName) {
    e.target.playerName.value = '';
    insertPlayer(playerName);
  }
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Matt';
    let jsx = (
      <div>
        <h1>{title}</h1>
        <p>Hello {name}!</p>
        <p>Second Paragraph</p>
        {renderPlayers(players)}
        <form onSubmit={handleSubmit}>
          <input type="text" name="playerName" placeholder="Player name"/>
          <button>Add Player</button>
        </form>
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});

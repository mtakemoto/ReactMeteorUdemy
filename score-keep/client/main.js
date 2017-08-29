import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';

Tracker.autorun(function() {
  console.log('Players list:', Players.find().fetch());
});

/* Notes
 * JSX should only return 1 root element
 */

const players = [{
  _id: '1',
  name: 'Dog',
  score: 99
}, {
  _id: '2',
  name: 'Cat',
  score: 42
}, {
  _id: '3',
  name: 'Matt',
  score: 23
}];

const renderPlayers = function() {
  return players.map(function(player) {
    return <p key={player._id}>{player.name} has {player.score} point(s)</p>;
  })
};

Meteor.startup(function() {
  let title = 'Score Keep';
  let name = 'Matt';
  let jsx = (
    <div>
      <h1>{title}</h1>
      <p>Hello {name}!</p>
      <p>Second Paragraph</p>
      {renderPlayers(players)}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'));
});

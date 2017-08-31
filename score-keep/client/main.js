import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';

/* Notes
 * JSX should only return 1 root element
 */

/* renderPlayers
 * Mongo has a shortcut for passing db id strings w/o using object
 * syntax
 */
const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return (
      <p key={player._id}>
        {player.name} has {player.score} point(s).
        <button onClick={() => {
          Players.update(player._id, {$inc: {score: 1}});
        }}>+1</button>
        <button onClick={() => {
          Players.update(player._id, {$inc: {score: -1}});
        }}>-1</button>
        <button onClick={() => Players.remove(player._id)}>X</button>
      </p>
    );
  });
};

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();
    let title = 'Score Keep';
    let name = 'Matt';
    let jsx = (
      <div>
        <TitleBar title={title} subtitle="Created by Matt"/>
        {renderPlayers(players)}

        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
  });
});

import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import Player from './../imports/ui/Player';

/* Notes
 * JSX should only return 1 root element
 */

/* renderPlayers
 * Mongo has a shortcut for passing db id strings w/o using object
 * syntax
 */
const renderPlayers = (playersList) => {
  return playersList.map((player) => {
    return <Player key={player._id} player={player} />;
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

import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

/* Notes
 * Meteor startup is the same on both client and server!
 * Runs when server process/DOM ready on server/client respectively
 * Meteor/MongoDB is synchronous
 */

Meteor.startup(function() {
  Players.insert({
    name: 'Matt',
    score: '42'
  });
  console.log(Players.find().fetch());
});

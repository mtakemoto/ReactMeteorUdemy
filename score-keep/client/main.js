import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';

/* Notes
 */

Meteor.startup(function() {
  let name = 'Matt';
  let jsx = <p>Hello {name}!</p>;
  ReactDOM.render(jsx, document.getElementById('app'));
});

import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';

export default class Player extends React.Component {
  render() {
    let p = this.props;
    return (
       <div key={p.player._id} className="item">
         <div className="player">
           <div>
             <h3 className="player__name">{p.player.name}</h3>
             <p className="player__stats">
                {p.player.rank} {p.player.position} {p.player.score} point(s).
             </p>
           </div>

           <div className="player__actions">
             <button className="button button--round" onClick={() => {
               Players.update(p.player._id, {$inc: {score: 1}});
             }}>+1</button>
             <button className="button button--round" onClick={() => {
               Players.update(p.player._id, {$inc: {score: -1}});
             }}>-1</button>
             <button className="button button--round" onClick={() => {
               Players.remove(p.player._id);
             }}>X</button>
           </div>
         </div>
       </div>
    );
  }
};

Player.propTypes = {
  player: PropTypes.object.isRequired
};

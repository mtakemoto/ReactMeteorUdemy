import {Mongo} from 'meteor/mongo';
import numeral from 'numeral';

export const Players = new Mongo.Collection('players');

/* function calculatePlayerPositions
 * pre: players array from MongoDB
 * post: calculates place rank, accounting for ties
 * returns: new array with formatted rank string
 */
export const calculatePlayerPositions = (players) => {
  let rank = 1;
  return players.map((player, index) => {
    if(index !== 0 && players[index - 1].score > player.score) {
      rank++;
    }

    return {
      ...player,
      position: numeral(rank).format('0o')
    }
  });
};

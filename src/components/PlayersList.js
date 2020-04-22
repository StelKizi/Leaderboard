import React from 'react';
import Player from './Player';
import { Consumer } from './Context';

export default function PlayersList() {
  return (
    <Consumer>
      {({players, actions}) => (
          <React.Fragment>
           {players.map((player, index) =>
            <Player 
              name={player.name}
              score={player.score}
              id={player.id}
              key={player.id.toString()}
              index={index}     
              isHighScore={actions.getHighScore() === player.score}
            />
          )}
         </React.Fragment>
      )}
    </Consumer>
  )
}

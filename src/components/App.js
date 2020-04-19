import React, { Component } from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state= {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
        },
      {
        name: "Mark",
        score: 0,
        id: 2
      },
      {
        name: "Bob",
        score: 0,
        id: 3
      }
    ]
  };
   
  getNextId = () => this.state.players.reduce((a, c) => (c.id > a ? c.id : a), 0) + 1;

  changeScore = (index, value) => {
    this.setState( prevState => ({
      score: prevState.players[index].score += value
    }));
  }

  addPlayer = (name) => {
    if (name === '') return

    this.setState(prevState => ({
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: this.getNextId()
        }
      ]
    }));
  }

  removePlayer = (id) => {
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
   }

  getHighScore = () => {
    const scores = this.state.players.map(player => player.score);
    const highScore = Math.max(...scores);
    if (highScore){
      return highScore;
    }
    return null;
  }

  render(){
    this.highScore = this.getHighScore();
    return (
      <div className = "scoreboard">
        <Header 
          title = "Scoreboard" 
          players={this.state.players} 
        />

        {/* Players list */}
        {this.state.players.map((player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()}
            index={index}
            changeScore={this.changeScore}        
            removePlayer={this.removePlayer}
            isHighScore={this.highScore===player.score}
          />
        )}

        <AddPlayerForm addPlayer={this.addPlayer} />
      </div>
    );
  }
   
}

export default App;

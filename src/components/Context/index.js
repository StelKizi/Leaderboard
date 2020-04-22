import React, {Component} from 'react';

const ScoreboardContext = React.createContext();
export class Provider extends Component {

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
  
    changeScore = (index, value) => {
      this.setState( prevState => ({
        score: prevState.players[index].score += value
      }));
    }

  render(){
    return(
      <ScoreboardContext.Provider value={{
        players: this.state.players,
        actions: {
          changeScore: this.changeScore,
          removePlayer: this.removePlayer,
          addPlayer: this.addPlayer,
          getHighScore: this.getHighScore
        }
      }}>
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
export const Consumer = ScoreboardContext.Consumer;

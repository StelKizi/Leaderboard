import React from 'react';
import Header from './Header';
import PlayersList from './PlayersList';
import AddPlayerForm from './AddPlayerForm';

const App = () => {
    return (
      <div className="scoreboard">
        <Header />
        <PlayersList />
        <AddPlayerForm />
      </div>
    );
}

export default App;

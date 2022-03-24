import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import React from 'react';
import './App.css';
import Dashboard from './views/Dashboard';
import AddPlayer from './views/AddPlayer';
import GameView from './views/GameView';

function App() {
  return (
    <BrowserRouter>
      <h2><Link to='/players/list'>Manage Players</Link>|
      <Link to='/status/game/1'>Manager Player Status</Link></h2>

      <Switch>
        <Route exact path='/players/list'>
        <h4><Link to={`/players/list`}>List</Link>|
        <Link to={`/players/addplayer`}>Add Player</Link></h4>
          <Dashboard />
        </Route>

        <Route exact path='/players/addplayer'>
          <AddPlayer />
        </Route>

        <Route exact path='/status/game/:num'>
          <GameView />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;

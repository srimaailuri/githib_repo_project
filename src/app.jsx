import React from 'react';
import RepoList from './components/RepoList';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <h1>Most Starred GitHub Repositories</h1>
      <RepoList />
    </div>
  );
}

export default App;

import React from 'react';
import './styles/App.css';
import NotesList from './components/NotesList';
import NoteSpace from './components/NoteSpace';

function App() {
  return (
    <div className='App'>
      <NotesList/>
      <NoteSpace/>
    </div>
  );
}

export default App;

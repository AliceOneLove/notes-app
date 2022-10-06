import React from 'react';
import './styles/App.css';
import NotesList from './components/NotesList';
import NoteSpace from './components/NoteSpace';
import MyHeader from './components/MyHeader';

function App() {
  return (
    <div className='App'>
      <MyHeader/>
      <main className='main'>
        <NotesList/>
        <NoteSpace/>
      </main>
    </div>
  );
}

export default App;

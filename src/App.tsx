import React, { createContext, useState } from 'react';
import './styles/App.css';
import NotesList from './components/NotesList';
import NoteSpace from './components/NoteSpace';
import MyHeader from './components/MyHeader';
import { NoteItemProps } from './components/NoteItem';

function App() {
  const [note, setNote] = useState({
    id: -1, 
    title: '', 
    body: ''
  });
  const CurrentNote = createContext<NoteItemProps>(note);
  
  return (
    <CurrentNote.Provider value={note}>
      <div className='App'>
        <MyHeader/>
        <NotesList/>
        <NoteSpace/>
      </div>
    </CurrentNote.Provider>
  );
}

export default App;

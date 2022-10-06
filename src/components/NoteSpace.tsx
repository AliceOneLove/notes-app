import React, { FC, useEffect, useState } from 'react';
import classes from '../styles/NoteSpace.module.css';
import MyButton from './MyButton';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { modifyNote, setCurrentNote } from '../store/reducers/notesListSlice';

const NoteSpace: FC = () => {
  const notes = useSelector((state: RootState) => state.notesList);
  const dispatch = useDispatch();
  const [curTitle, setCurTitle] = useState(notes.currentNote.title);
  const [curBody, setCurBody] = useState(notes.currentNote.body);

  useEffect(() => {
    setCurTitle(notes.currentNote.title);
    setCurBody(notes.currentNote.body);
  }, [notes.currentNote]);

  if (notes.currentNote.id >= 0) {
    return(
      <div className={classes.noteSpace}>
        <div className={classes.noteSpaceHeader}>
          <input
            type='text' 
            placeholder='Title' 
            id='noteTitle'
            value={curTitle} 
            className={classes.noteSpaceTitle}
            onChange={(e) => setCurTitle(e.target.value)}
          />
          <MyButton style={{width:'10%', height:'40%', boxSizing:'border-box', margin:'0 1%'}} onClick={() => dispatch(modifyNote({
            id: notes.currentNote.id, 
            title: curTitle, 
            body: curBody
          }))}>
            Save
          </MyButton>
          <MyButton style={{width:'10%', height:'40%', boxSizing: 'border-box'}} onClick={() => dispatch(setCurrentNote({id: -1, title: '', body: ''}))}>Close</MyButton>
        </div>
        <textarea
          placeholder='Your note...' 
          id='noteBody'
          value={curBody} 
          className={classes.noteSpaceBody}
          onChange={(e) => setCurBody(e.target.value)}
        />
      </div>
    );
  }
    
  return (
    <div className={classes.noteSpace}/>
  );
};

export default NoteSpace;
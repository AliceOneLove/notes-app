import React, { FC, useContext } from 'react';
import classes from '../styles/NoteSpace.module.css';
import { NoteItemProps } from './NoteItem';

const NoteSpace: FC = () => {
  const note = useContext(CurrentNote);
  if (title && body) {
    return(
      <div>
        <input
          type='text' 
          placeholder='Title' 
          id='noteTitle'
          value={title} 
          className={classes.noteSpaceTitle}
        />
        <input
          type='text' 
          placeholder='Your note...' 
          id='noteBody'
          value={title} 
          className={classes.noteSpaceBody}
        />
      </div>
    );
  }
    
  return (
    <div className={classes.noteSpace}/>
  );
};

export default NoteSpace;
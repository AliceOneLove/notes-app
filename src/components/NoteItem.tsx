import React, { FC } from 'react';
import classes from '../styles/NoteItem.module.css';
import {Note, setCurrentNote, removeNote} from '../store/reducers/notesListSlice';
import { useDispatch } from 'react-redux';

interface INoteProps extends Note {
  index: number;
}

const NoteItem: FC<INoteProps> = ({index, id, title, body}) => {
  const dispatch = useDispatch();
  return (
    <div className={classes.noteItemContainer}>
      <div onClick={() => dispatch(setCurrentNote({id, title, body}))} className={classes.noteItem}>
        {index}. {title}
      </div>
      <button onClick={() => dispatch(removeNote(id))} className={classes.noteItemButton}>X</button>
    </div>
  );
};

export default NoteItem;
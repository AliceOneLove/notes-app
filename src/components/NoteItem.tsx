import React, { FC } from 'react';
import classes from '../styles/NoteItem.module.css';

export interface NoteItemProps {
    id?: number;
    title?: string;
    body?: string;
}

const NoteItem: FC<NoteItemProps> = ({id, title, body}: NoteItemProps) => {
  return (
    <div onClick={() => console.log('cock')} className={classes.noteItem}>
        {id}. {title}
    </div>
  );
};

export default NoteItem;
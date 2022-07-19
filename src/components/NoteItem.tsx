import React, { FC } from 'react';

interface NoteItemProps {
    id: number;
    title: string;
    body: string;
}

const NoteItem = ({id, title, body}: NoteItemProps) => {
  return (
    <div>
        {id}. {title}
    </div>
  );
};

export default NoteItem;
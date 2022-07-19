import React, { FC, useEffect, useState } from 'react';
import NoteItem, { NoteItemProps } from './NoteItem';

const NotesList: FC = () => {
    const [notes, setNotes] = useState<[NoteItemProps]>();
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(data => setNotes(data));
    }, []);

    return (
        <div>
            {notes?.map(note => 
                <NoteItem key={note.id} id={note.id} title={note.title} body={note.body}/>
            )}
        </div>
    );
}

export default NotesList;
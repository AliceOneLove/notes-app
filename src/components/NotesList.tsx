import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import NoteItem from './NoteItem';
import MyButton from './MyButton';
import classes from '../styles/NotesList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addNote, removeNote, setNotesList } from '../store/reducers/notesListSlice';

const NotesList: FC<HTMLAttributes<HTMLDivElement>> = () => {
    // const [notes, setNotes] = useState<[NoteItemProps]>();
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
    //         .then(response => response.json())
    //         .then(data => setNotes(data));
    // }, []);
    
    // return (
    //     <div className={classes.notesList}>
    //         {notes?.map(note => 
    //             <NoteItem key={note.id} id={note.id} title={note.title} body={note.body}/>
    //         )}
    //     </div>
    // );

    const dispatch = useDispatch();
    const notes = useSelector((state: RootState) => state.notesList);

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        setIsDisabled(notes.currentNote.id === -1 ? true : false); 
    }, [notes.currentNote]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            .then(response => response.json())
            .then(notesList => dispatch(setNotesList(notesList)));
    }, []);

    return (
        <div className={classes.notesList}>
            <div className={classes.buttonsContainer}>
                <MyButton style={{margin:'2%'}} onClick={() => dispatch(addNote())}>Add</MyButton>
                <MyButton style={{margin:'2%'}} disabled={isDisabled} onClick={() => dispatch(removeNote(notes.currentNote.id))}>Remove</MyButton>
            </div>
            <div className={classes.notesListContainer}>
                {notes.notes.length > 0 && notes.notes.map((note, index) => 
                    <NoteItem key={note.id} index={index} id={note.id} title={note.title} body={note.body}/>
                )}
                {notes.notes.length === 0 && <div className={classes.emptyList}>No notes?<br/>*Megamind*</div>}
            </div>
        </div>
    );
}

export default NotesList;
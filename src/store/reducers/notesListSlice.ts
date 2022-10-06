import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Note {
    id: number;
    title: string;
    body: string;
}

export interface NotesListState {
    notes: Note[];
    currentNote: Note;
}

const initialState: NotesListState = {
    notes: [],
    currentNote: {id: -1, title: '', body: ''}
}

export const notesListSlice = createSlice({
    name: 'notesList',
    initialState,
    reducers: {
        addNote: (state) => {
            const newNote: Note = {id: state.notes.length + 1, title: '', body: ''};
            state.notes.push(newNote);
            state.currentNote = newNote;
        },
        modifyNote: (state, action: PayloadAction<Note>) => {
            state.notes[state.currentNote.id - 1] = action.payload;
        },
        removeNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
            state.currentNote = {id: -1, title: '', body: ''};
        },
        setCurrentNote: (state, action: PayloadAction<Note>) => {
            state.currentNote = action.payload;
        },
        setNotesList: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
    }
});

export const { addNote, modifyNote, removeNote, setCurrentNote, setNotesList } = notesListSlice.actions;
export default notesListSlice.reducer;
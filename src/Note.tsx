import './App.css';
import { Store, noteSlice, type Note, type AppDispatch } from './Store';
import { useSelector, useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function NoteAdd() {
    const dispatch = useDispatch<AppDispatch>();
    const { add } = noteSlice.actions;
    const [noteText, setNoteText] = useState<string>("");

    function saveNote() {
        if(noteText.trim() === '') return;
        const note = { text: noteText, date: new Date().toLocaleTimeString() };
        dispatch(add(note));
        setNoteText("");
    }

        return <>
        <div className='note-add'>
            <TextField onChange={(e) => setNoteText(e.target.value)} value={noteText} variant="outlined" size='small' />
            <Button onClick={(e) => saveNote() } variant='contained'>Добавить</Button>
        </div>
    </>
}

function NoteList() {
    type RootState = ReturnType<typeof Store.getState>;
    const notes = useSelector((state: RootState) => state.notes.notes);

    return <>
        <List aria-label="main mailbox folder">
            {
                notes.map((note:Note, index) => <ListItemButton key={index}><ListItemText primary={ note.date + ": " + note.text} /></ListItemButton> )
            }
        </List>
    </>
}

export {
    NoteAdd, NoteList
}
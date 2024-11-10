import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

type Note = {
  text: string;
  date: string;
}

type NoteState = {
  notes: Note[];
}

const initialStateNote: NoteState = {
  notes: []
}

const noteSlice = createSlice({
  name: 'noteSlice',
  initialState: initialStateNote,
  reducers: {
    add: (state, action: PayloadAction<Note>) => { state.notes.push(action.payload); return state; }
  }
});

type User = {
  name: string;
  username: string;
}

const initialStateUser: User = {
  name: "",
  username: "",
}
  
const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialStateUser,
    reducers: {
      set: (state, action: PayloadAction<User>) => state = action.payload,
    }
});

const Store = configureStore({
    reducer: {
      notes: noteSlice.reducer,
      users: userSlice.reducer,
    }
});

type AppDispatch = typeof Store.dispatch;

export { Store, type AppDispatch, userSlice, noteSlice, type Note }
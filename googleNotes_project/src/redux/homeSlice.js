
import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    notes: [
        // {
        //     title:"",
        //     content:"",
        //     activeBackgroundColor:"",
        //     label:"notes",
        //     pinned:"false",
        //     id: crypto.randomUUID(),
        // },
    ],
    searchQuery:"",
 };

export const notesSlice = createSlice({
    name: "notesStore",
    initialState,

    reducers : {
        //  incrementByAmount: (state,action) => {
        //     state.value += action.payload;
        //  }
        createNotes:(state,action)=>{
           state.notes.push(action.payload);
        },
        updateNote: (state,action) => {
            const {index,payload} = action.payload;
            state.notes[index]={
                ...state.notes[index],
                ...payload,
            };
        },
  deleteNote:(state,action)=>{
 const {index}= action.payload;
 state.notes?.splice(index, 1);
  },
  updateSearchQuery:(state,action)=>{
    state.searchQuery = action.payload;
  }
    }
})

export const {createNotes,updateNote,deleteNote,updateSearchQuery} = notesSlice.actions;

export default notesSlice.reducer;